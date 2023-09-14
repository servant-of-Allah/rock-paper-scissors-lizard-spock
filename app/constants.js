import { rock, paper, scissor, lizard, spock } from "@/public";

export const data = [
  {
    name: "scissor",
    image: scissor,
    place:
      "left-[85px] sm:left-[110px] md:left-[115px] top-[-35px] md:top-[-50px]",
    bg: "bg-gradient-to-br from-[#ec9e0e] to-[#eca922]",
  },
  {
    name: "paper",
    image: paper,
    place: "right-[-40px] md:right-[-50px] top-[50px] sm:top-[65px]",
    bg: "bg-gradient-to-br from-[#4865f4] to-[#5671f5]",
  },
  {
    name: "rock",
    image: rock,
    place: "right-0 md:right-[18px] bottom-[-40px] md:bottom-[-40px]",
    bg: "bg-gradient-to-br from-[#dc2e4e] to-[#dd405d]",
  },
  {
    name: "lizard",
    image: lizard,
    place:
      "left-[10px] sm:left-[25px] md:left-[18px] bottom-[-40px] md:bottom-[-40px]",
    bg: "bg-gradient-to-br from-[#834fe3] to-[#8c5de5]",
  },
  {
    name: "spock",
    image: spock,
    place:
      "left-[-28px] md:left-[-35px] top-[45px] sm:top-[60px] md:top-[65px]",
    bg: "bg-gradient-to-br from-[#40b9ce] to-[#52bed1]",
  },
];
