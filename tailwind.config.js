/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rev-orange": "#F37020",
        "rev-blue": "#2D4BC8",
        "rev-black": "#202020",
        "rev-white": "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
      dropShadow: {
        rev: "0 0 5px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
      animation: {
        fade: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
