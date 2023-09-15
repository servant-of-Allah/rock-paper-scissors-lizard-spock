"use client";
import "./globals.css";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { GameContextProvider } from "@/app/context/GameContext";

// export const metadata = {
//   title: "Frontend Mentor | Rock, Paper, Scissors, Lizard, Spock",
//   description:
//     "Rock papers scissors lizard spock game. advanced challenge from frontend mentor",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen overflow-hidden flex flex-col items-center justify-between">
        <GameContextProvider>
          <header className="w-full mt-8 sm:mt-10 md:mt-12 mb-6 md:mb-10">
            <Header />
          </header>

          <main>{children}</main>

          <footer className="w-full">
            <Button />
          </footer>
        </GameContextProvider>
      </body>
    </html>
  );
}
