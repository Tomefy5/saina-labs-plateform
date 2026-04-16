import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: "#00B4FF", light: "#38D1F8" },
        blue: { brand: "#2563EB", dark: "#1E3A8A" },
        violet: { DEFAULT: "#7C3AED", light: "#A78BFA" },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        "2": "repeat(2, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
