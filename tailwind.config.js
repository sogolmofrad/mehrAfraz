/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#6e6e6e",
        redPrimary: "#fc4048",
        redSecondary: "#d2151e",
        greyExtraLight: "#f3f3f3",
        greyLight: "#f8f8f8",
        greyMediumLight: "#9e9e9e",
        greyBackGround: "#e6e6e6",
        greyDark: "#262626",
        pink: "#FEB2B6",
        pinkLight: "#FED8DA",
        pinkExtraLight: "#FFF6F6",
        redSemiTransparent: "rgba(25, 5, 5, 0.49)",
        greyTransparent:"rgba(25, 5, 5, 0.49)",
      },
      backgroundImage: {
        "linear-black":
          "linear-gradient(to right bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))",
        "linear-red":
          "linear-gradient(to right bottom, rgba(255, 0, 0, 0.47), rgba(0,0,0,0.47))",
      },
    },
  },
  plugins: [],
};
