import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "@/app/context/GameContext";

const GameEnd = ({ first, second }) => {
  const { calculateResult, setLatestScore, latestScore } =
    useContext(GameContext);
  const [result, setResult] = useState("");

  useEffect(() => {
    const res = calculateResult(first, second);
    if (res === "win") {
      setLatestScore((s) => s + 1);
      setResult("you win");
    } else if (res === "lose" && latestScore > 0) {
        setLatestScore((s) => s - 1);
        setResult("you lose");
    } else {
        setResult("draw");
    }
  }, [first, second]);

  return (
    <div className="grid place-items-center gap-2 mt-[-30px] md:mt-0 order-3 md:order-2 z-50">
      <h1 className="text-white font-bold uppercase text-[2.5rem] md:text-[3rem] tracking-wider">
        {result}
      </h1>
      <button
        type="button"
        className="bg-white text-dark text-[1rem] px-[50px] py-[10px] rounded-md tracking-widest uppercase hover:bg-dark hover:text-[white] transition-[80ms]"
      >
        <Link href="/">Play again</Link>
      </button>
    </div>
  );
};

export default GameEnd;
