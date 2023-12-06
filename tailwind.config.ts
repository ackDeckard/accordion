import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        cardBackground: "url('/background-pattern-mobile.svg')",
        cardBackgroundDesktop: "url('/background-pattern-desktop.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkPurple: "hsl(292, 42%, 14%)",
        palePurple: "hsl(292, 16%, 49%)",
        lightPurple: "hsl(274, 100%, 97%)",
        purePurple: "hsl(281, 83%, 54%)",
      },
    },
  },
  plugins: [],
};
export default config;
