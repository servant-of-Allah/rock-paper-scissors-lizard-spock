"use client";

import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [showRule, setShowRule] = useState(false);
  const [latestScore, setLatestScore] = useState(0);

  function calculateResult(i, j) {
    const outcomes = ["draw", "win", "lose", "win", "lose"];
    return outcomes[(5 + j - i) % 5];
  }

  const data = {
    showRule,
    setShowRule,
    calculateResult,
    latestScore,
    setLatestScore,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};
