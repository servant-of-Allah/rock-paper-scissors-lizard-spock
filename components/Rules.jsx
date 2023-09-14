import Image from "next/image";
import { close, rules } from "@/public";
import { useContext } from "react";
import { GameContext } from "@/app/context/GameContext";

const Rules = () => {
  const { setShowRule } = useContext(GameContext);

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="flex flex-col items-center sm:block bg-white px-8 py-6 sm:rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-full h-full sm:w-auto sm:h-auto">
        <h1 className="uppercase text-dark font-bold text-[1.8em] md:text-[2em] mt-[5vh] mb-[8vh] sm:mt-0 sm:mb-6">
          Rules
        </h1>
        <div className="mb-5 justify-self-center">
          <Image src={rules} alt="rules image" />
        </div>
        <button
          className="absolute top-[88%] sm:top-[40px] sm:right-[32px]"
          onClick={() => setShowRule((r) => !r)}
        >
          <Image src={close} alt="cross icon" />
        </button>
      </div>

      <div className="fixed inset-0 bg-[#0006] z-40"></div>
    </div>
  );
};

export default Rules;
