/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPrimary: "#3b4d5c",
        mainSecondary: "#C4CACE",
        gray_1: "#F2F2F2",
        gray_2: "#e6e6e6",
        gray_3: "#cecece",
        gray_4: "#b6b6b6",
        gray_5: "#9e9e9e",
        gray_6: "#868686",
        gray_7: "#6e6e6e",
        gray_8: "#565656",
        gray_9: "#3e3e3e",
        gray_10: "#262626",
        gray_11: "#212121",
       
        redSecondary: "#d2151e",
        greyExtraLight: "#f3f3f3",
        greyLight: "#f8f8f8",
        footerIconHover: "rgba(254, 216, 218, 0.40)",
        pink: "#FEB2B6",
        pinkLight: "#FED8DA",
        pinkExtraLight: "#FFF6F6",
        redSemiTransparent: "rgba(25, 5, 5, 0.49)",
        linkBlue: "#0D68F0",
        greyTransparent: "rgba(25, 5, 5, 0.49)",
        blackTransparent: "rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "linear-black":
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        "linear-red":
          "linear-gradient(to right bottom, rgba(255, 0, 0, 0.47), rgba(0,0,0,0.47))",
      },
      fontSize: {
        xs: "1.2rem",
        sm: "1.4rem",
        base: "1.6rem",
        lg: "1.8rem",
        xl: "2rem",
        "2xl": "2.4rem",
        "3xl": "3.2rem",
      },
      fontFamily: {
        sans: ["IRANSansXFaNum", "sans-serif"], // Use your custom font as the default sans font
      },
      fontWeight: {
        bold: "700",
        thin: "100",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        xs: "var(--space-super-small)",
        small: "var(--space-small)",
        base: "var(--space-base)",
        medium: "var(--space-medium)",
      },

      padding: {
        section: "3.2rem",
        18: "4.8rem",
      },
      margin: {
        section: "5rem",
      },
      gap: {
        grid: "2.4rem",
      },

      borderRadius: {
        lg: "24px",
        xl: "32px",
        "2xl": "4rem",
      },
      boxShadow:{
        "normal":"0px 0px 30px 0px rgba(0, 34, 66, 0.35)",
      }
    },
  },
  plugins: [],
};
