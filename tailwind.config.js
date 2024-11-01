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
  			UberMoveNormal: ["UberMoveNormal", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
