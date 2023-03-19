/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Merriweather: ["Merriweather", "serif"],
      SourceSansPro: ["Source Sans Pro", "sans-serif"],
      SourceSerifPro: ["Source Serif Pro", "serif"],
    },
  },
  plugins: [],
};
