/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      fontWeight: {
        semibold: 600,
        bold: 700,
      },
      screens: {
        sm: "600px",
        md: "1000px",
        lg: "1200px",
        xlg: "1400px",
      },
    },
  },
  plugins: [],
};
