/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/global.css"],
  theme: {
    extend: {
      fontFamily: {
        UberMoveBold: ["UberMoveBold", "sans-serif"],
        UberMoveLight: ["UberMoveLight", "sans-serif"],
        UberMoveMedium: ["UberMoveMedium", "sans-serif"],
        UberMoveNormal: ["UberMoveNormal", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "gray-33": "#333333",
        "gray-f3": "#f3f3f3",
        "blue-00": "#002661",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
