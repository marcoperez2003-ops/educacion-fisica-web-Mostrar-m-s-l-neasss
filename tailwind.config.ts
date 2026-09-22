import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b0ff",
          500: "#2f8fff",
          600: "#1a6ff2",
          700: "#155bd6",
          800: "#174ba9",
          900: "#184184",
          950: "#132a51"
        },
        accent: {
          50: "#eafff4",
          100: "#cbffe4",
          200: "#99ffca",
          300: "#5cf7a9",
          400: "#28e485",
          500: "#0dc86c",
          600: "#04a058",
          700: "#067c48",
          800: "#0a613b",
          900: "#0a5033",
          950: "#022c1c"
        },
        energy: {
          400: "#ffb443",
          500: "#ff9518",
          600: "#f2760c"
        }
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: [typography]
};

export default config;
