import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(3.5rem, 4vw, 5rem)",
      },
      colors: {
        primary: "#fff",
        secondary: "#a2a2a3",
        light: "rgba(255, 255, 255, 0.10)",
        card: "var(--card)",
        main: "var(--main)",
      },
    },
  },
  plugins: [],
};
export default config;
