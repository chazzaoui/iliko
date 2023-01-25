/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Pinkish: "#D8D1D2",
        White: "#ffffff",
        Black: "#000000",
      },
      fontFamily: {
        Monst: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
