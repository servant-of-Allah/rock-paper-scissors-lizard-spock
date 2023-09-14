import Image from "next/image";

const GameChoice = ({ name, image, style, size }) => {
  return (
    <div className={`grid place-itmes-center ${style}`}>
      <Image src={image} alt={name} className={`${size} dice`} />
    </div>
  );
};

export default GameChoice;
