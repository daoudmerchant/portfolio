module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        1: "1em",
        2: "2em",
        4: "4em",
        6: "6em",
        8: "8em",
        12: "12em",
        16: "16em",
        20: "20em",
        30: "30em",
        40: "40em",
        48: "48em",
        56: "56em",
        64: "64em",
        80: "80em",
      },
      skew: {
        minus45: "-45deg",
        45: "45deg",
      },
      margin: {
        iconmarginlandscape: "3vh",
        iconmarginportrait: "3vw",
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
        iconlandscape: "6vh",
        iconportrait: "6vw",
        framelandscape: "8vh",
        frameportrait: "8vw",
        fullpanellandscape: "calc(100% - 8vh)",
        fullpanelportrait: "calc(100% - 8vw)",
        projectpanel: "31.25vw",
        // projectpanellg: "62.5vw",
        // projectpanelportrait: "calc(160vw - 8.8em)",
        projectbox: "calc(31.25vw - 16em)",
        projectboxlg: "calc(62.5vw - 4em)",
        projectboxportrait: "calc(160vw - 12.8em)",
        bannervertical: "8vh",
        bannerhorizontal: "8vw",
        "full+": "calc(100% + 2em)",
      },
      boxShadow: {
        pill: "-5px 5px 15px -5px rgba(145,145,145,0.6)",
      },
      width: {
        iconlandscape: "6vh",
        iconportrait: "6vw",
        framelandscape: "8vh",
        frameportrait: "8vw",
        fullpanel: "calc(100% - 8em)",
        fulllinks: "calc(100% - 16em)",
        projectpanel: "calc(50vw - 8em)",
        projectbox: "calc(50vw - 24em)",
        projectboxlg: "calc(100vw - 8em)",
        halfpanel: "calc(50% - 4em)",
        bannervertical: "8vh",
        bannerhorizontal: "8vw",
        "full+": "calc(100% + 2em)",
      },
      translate: {
        raisescreenshot: "calc(-100% - 16em)",
      },
      inset: {
        framelandscape: "8vh",
        frameportrait: "8vw",
        halfframelandscape: "4vh",
        halfframeportrait: "4vw",
        "1/6": "16.6666667%",
        74: "74em",
        swiperoutsetlandscape: "-8vh",
        swiperoutsetportrait: "-8vw",
      },
      borderWidth: {
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
