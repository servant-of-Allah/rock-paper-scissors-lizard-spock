"use client";
import { useState, useEffect, useContext } from "react";
import GameChoice from "@/components/GameChoice";
import { data } from "@/app/constants";
import GameEnd from "@/components/GameEnd";
import { GameContext } from "@/app/context/GameContext";

const Step2 = ({ params }) => {
  const [showResult, setShowResult] = useState(false);
  const [houseChoice, setHouseChoice] = useState({});
  const [outcome, setOutcome] = useState("");
  const { calculateResult } = useContext(GameContext);

  const playerChoice = data[params.id];

  useEffect(() => {
    const choiceTimer = setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 5);
      setHouseChoice(data[randomNum]);
      setOutcome(calculateResult(parseInt(params.id), randomNum));
    }, 500);

    const resultTimer = setTimeout(() => {
      setShowResult(true);
      let res = calculateResult(parseInt(params.id), data.indexOf(houseChoice));
    }, 750);

    return () => {
      clearTimeout(choiceTimer);
      clearTimeout(resultTimer);
    };
  }, []);

  return (
    <section className="sm:w-[80%] sm:mx-auto md:w-full h-full flex flex-wrap items-center justify-center gap-14 md:gap-16 mb-16 md:mb-10">
      <div className="flex flex-col gap-8 items-center order-1">
        <h2 className="text-white text-[1rem] sm:text-[1.3rem] md:text-[1.6rem] uppercase order-2 md:order-1 tracking-widest">
          You picked
        </h2>
        <div
          className={`order-1 md:order-2 rounded-full ${
            outcome === "win" && "shadow z-[-1]"
          }`}
        >
          <GameChoice
            name={playerChoice.name}
            image={playerChoice.image}
            style={`${playerChoice.bg} picked-wrapper order-1 md:order-2`}
            size="picked-dice"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center order-2 md:order-3">
        <h2 className="text-white text-[1rem] sm:text-[1.3rem] md:text-[1.6rem] uppercase order-2 md:order-1 tracking-widest">
          The house picked
        </h2>
        {houseChoice.name ? (
          <div
            className={`order-1 md:order-2 rounded-full ${
              outcome === "lose" && "shadow z-[-1]"
            }`}
          >
            <GameChoice
              name={houseChoice.name}
              image={houseChoice.image}
              style={`${houseChoice.bg} picked-wrapper`}
              size="picked-dice"
            />
          </div>
        ) : (
          <div className="bg-[#16213D] opacity-[0.5] rounded-full w-[100px] sm:w-[130px] sm:h-[130px] h-[100px] md:w-[210px] md:h-[210px] p-[25px] sm:p-[30px] md:p-[50px] m-[17px] sm:m-[20px] md:m-[35px] order-1 md:order-2"></div>
        )}
      </div>

      {showResult && (
        <GameEnd
          first={parseInt(params.id)}
          second={data.indexOf(houseChoice)}
        />
      )}
    </section>
  );
};

export default Step2;
