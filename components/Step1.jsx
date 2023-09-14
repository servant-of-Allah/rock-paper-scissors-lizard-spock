// "use client";
import Image from "next/image";
import GameChoice from "./GameChoice";
import { pentagon } from "@/public";
import { useRouter } from "next/navigation";
import { data } from "@/app/(constants)/constants";

const Step1 = () => {
  const router = useRouter();

  const handleClick = (index) => {
    router.push(`/step/${index.toString()}`);
  };

  return (
    <div className="relative">
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
              style={`${item.place} ${item.bg}`}
              size="step1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1;
