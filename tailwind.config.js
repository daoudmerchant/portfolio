module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      spacing: {
        0.5: "0.5em",
        1: "1em",
        2: "2em",
        3: "3em",
        4: "4em",
        6: "6em",
        7: "7em",
        8: "8em",
        9: "9em",
        12: "12em",
        15: "15em",
        16: "16em",
        20: "20em",
        30: "30em",
        40: "40em",
        48: "48em",
        50: "50em",
        56: "56em",
        64: "64em",
        70: "70em",
        80: "80em",
        90: "90em",
      },
      fontSize: {
        1: "1em",
        2: "2em",
        3: "3em",
        4: "4em",
        5: "5em",
        6: "6em",
        7: "7em",
        8: "8em",
        9: "9em",
        10: "10em",
        12: "12em",
        16: "16em",
        20: "20em",
        30: "30em",
        40: "40em",
        48: "48em",
        50: "50em",
        56: "56em",
        64: "64em",
        80: "80em",
      },
      skew: {
        minus45: "-45deg",
        45: "45deg",
      },
      margin: {
        iconmarginlandscape: "3em",
        iconmarginportrait: "3em",
      },
      height: {
        /*
          Project height (split) - 16x10

          width = 50vw - 2em;
          height = (50vw - 8em) / 16 * 10 = 31.25vw - 1.25em

          Project height (single, small) - 10x16

          width = 100vw - 8em;
          height = (100vw - 8em) / 10 * 16 = 160vw - 12.8em
        */
        fulllinks: "calc(100% - 16em)",
        projectpanel: "calc(31.25vw - 16em)",
        projectpanellg: "calc(62.5vw - 4em)",
        projectpanelportrait: "calc(160vw - 35.2em)",
        projectbox: "calc(31.25vw - 32em)",
        projectboxlg: "calc(62.5vw - 20em)",
        projectboxportrait: "calc(160vw - 51.2em)",
        "full+": "calc(100% + 2em)",
      },
      boxShadow: {
        pill: "-5px 5px 15px -5px rgba(145,145,145,0.6)",
      },
      width: {
        fullpanel: "calc(100% - 8em)",
        fulllinks: "calc(100% - 16em)",
        projectpanel: "calc(50vw - 8em)",
        projectbox: "calc(50vw - 24em)",
        projectboxlg: "calc(100vw - 32em)",
        halfpanel: "calc(50% - 4em)",
        "full+": "calc(100% + 2em)",
      },
      translate: {
        raisescreenshot: "calc(-100% - 16em)",
      },
      inset: {
        "1/6": "16.6666667%",
        74: "74em",
      },
      borderWidth: {
        6: "6em",
        16: "16px",
        triangle: "16em",
      },
      animation: {
        "fade-in": "fade-in 1s linear forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      transitionProperty: {
        position: "left, right, top, bottom",
      },
      screens: {
        portrait: { raw: "(orientation: portrait)" },
      },
    },
  },
  variants: {},
  plugins: [],
};
