/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-900": "#0B0D17",
        "blue-800": "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        "bellefair-regular": ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};

