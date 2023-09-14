"use client";
import Image from "next/image";
import logo from "../public/images/logo-bonus.svg";
import { useContext, useEffect } from "react";
import { GameContext } from "@/app/context/GameContext";

const Header = () => {
  const { latestScore } = useContext(GameContext);

  return (
    <div className="flex justify-between items-center w-[90%] sm:w-[70%] lg:w-[50%] px-4 py-3 sm:px-5 sm:py-4 border-[3px] border-headerOutline rounded-lg md:rounded-[15px] m-auto h-[120px] sm:h-[135px] md:h-[150px] z-50">
      <div>
        <Image
          src={logo}
          alt="game logo"
          className="w-[80px] sm:w-[100px] md:w-[120px]"
          priority="important"
        />
      </div>

      <div className="flex flex-col justify-center items-center bg-white rounded-md sm:rounded-[10px] leading-[1] h-full px-7 md:px-10">
        <p className="text-score font-semibold text-[13px] sm:text-[15px] md:text-[18px] tracking-widest uppercase">
          score
        </p>

        <p className="text-dark text-[45px] sm:text-[55px] md:text-[65px] font-bold">
          {latestScore}
        </p>
      </div>
    </div>
  );
};

export default Header;
