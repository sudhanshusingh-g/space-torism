/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          800: "#D0D6F9",
          900: "#0B0D17",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "home-mobile": "url('/src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/src/assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};

