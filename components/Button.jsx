import { GameContext } from "@/app/context/GameContext";
import { useContext } from "react";

const Button = () => {
  const { setShowRule } = useContext(GameContext);

  return (
    <div>
      <button
        type="button"
        className="bg-transparent uppercase text-white font-semibold tracking-widest text-[17px] border-[1px] border-white rounded-md md:rounded-lg px-10 py-2 transition-[100ms] hover:border-dark block mx-auto md:mr-12 mb-8 sm:mb-10"
        onClick={() => setShowRule((r) => !r)}
      >
        rules
      </button>
    </div>
  );
};

export default Button;
