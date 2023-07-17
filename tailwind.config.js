const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Theme1: {
          // ### Theme 1
          backgroundOne: {
            main: "hsl(222, 26%, 31%)",
            toggle: "hsl(223, 31%, 20%)",
            screen: "hsl(224, 36%, 15%)",
          },
          keyOne: {
            background: "hsl(225, 21%, 49%)",
            shadow: "hsl(224, 28%, 35%)",
            redKeyBackground: "hsl(6, 63%, 50%)",
            redKeyShadow: "hsl(6, 70%, 34%)",
            lightGrayishOrangeKeyBackground: "hsl(30, 25%, 89%)",
            grayishOrangeKeyShadow: "hsl(28, 16%, 65%)",
          },
          textOne: {
            main: "hsl(221, 14%, 31%)",
            white: "hsl(0, 0%, 100%)",
          },
        },
        Theme2: {
          // ### Theme 2
          backgroundTwo: {
            main: "hsl(0, 0%, 90%)",
            toggle: "hsl(0, 5%, 81%)",
            screen: "hsl(0, 0%, 93%)",
          },
          keyTwo: {
            background: "hsl(185, 42%, 37%)",
            shadow: "hsl(185, 58%, 25%)",
            orangeKeyBackground: "hsl(25, 98%, 40%)",
            orangeKeyShadow: "hsl(25, 99%, 27%)",
            lightGrayishYellowKeyBackground: "hsl(45, 7%, 89%)",
            darkGrayishOrangeKeyShadow: "hsl(35, 11%, 61%)",
          },
          textTwo: {
            main: "hsl(60, 10%, 19%)",
            white: "hsl(0, 0%, 100%)",
          },
        },

        Theme3: {
          // ### Theme 3
          backgroundThree: {
            main: "hsl(268, 75%, 9%)",
            toggle: "hsl(268, 71%, 12%)",
            screen: "hsl(268, 71%, 12%)",
          },
          keyThree: {
            background: "hsl(281, 89%, 26%)",
            shadow: "hsl(285, 91%, 52%)",
            cyanKeyBackground: "hsl(176, 100%, 44%)",
            cyanKeyShadow: "hsl(177, 92%, 70%)",
            darkVioletKeyBackground: "hsl(268, 47%, 21%)",
            darkMagentaKeyShadow: "hsl(290, 70%, 36%)",
          },
          textThree: {
            main: "hsl(52, 100%, 62%)",
            veryDarkBlue: "hsl(198, 20%, 13%)",
            white: "hsl(0, 0%, 100%)",
          },
        },
      },

      fontFamily: {
        Spartan: ["Spartan", "sans-serif"],
      },
      fontSize: {
        Number: "32px",
      },
    },

    plugins: [],
  },
});
