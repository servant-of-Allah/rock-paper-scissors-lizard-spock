"use client";
import Image from "next/image";
import GameChoice from "@/components/GameChoice";
import { pentagon } from "@/public";
import { useContext } from "react";
import { GameContext } from "@/app/context/GameContext";
import { useRouter } from "next/navigation";
import { data } from "@/app/constants";
import Rules from "@/components/Rules";

const Home = () => {
  const router = useRouter();
  const { showRule } = useContext(GameContext);

  const handleClick = (index) => {
    router.push(`/${index.toString()}`);
  };

  return (
    <div className="relative">
      {/* show RULE */}
      {showRule && <Rules />}
      {/* show RULE */}

      <Image
        src={pentagon}
        alt="pentagon background svg"
        className="w-[250px] sm:w-[310px] md:w-[350px]"
      />

      <div className="absolute top-0 z-50 w-full h-full ">
        {data?.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            <GameChoice
              name={item.name}
              image={item.image}
              style={`${item.place} ${item.bg}  home-wrapper`}
              size="home-dice"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
