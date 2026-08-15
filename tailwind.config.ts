import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#070e36",
          light: "#0a1744",
          dark: "#050a24",
        },
        ivory: "#FAF6EF",
        cream: "#F3ECDF",
        gold: {
          DEFAULT: "#B8905A",
          soft: "#D9BE95",
        },
        ink: "#ffffff",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
