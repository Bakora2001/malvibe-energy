/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#57ab79",
          50: "#f1faf4",
          100: "#dff3e6",
          200: "#bfe7cd",
          300: "#94d4ad",
          400: "#6dbf8e",
          500: "#57ab79",
          600: "#3f8b60",
          700: "#316e4c",
          800: "#28573d",
          900: "#1f4530",
        },
        secondary: {
          DEFAULT: "#104f9f",
          50: "#eff5fc",
          100: "#dcebf8",
          200: "#b6d3f0",
          300: "#85b3e3",
          400: "#4a8bd2",
          500: "#256dbe",
          600: "#1a59a6",
          700: "#104f9f",
          800: "#0d3f7e",
          900: "#0b3263",
        },
        surface1: "#f4f7f2",
        surface2: "#efeee4",
        ink: "#0f1d18",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
};
