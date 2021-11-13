module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        minus45: "-45deg",
        45: "45deg",
      },
      height: {
        /*
          Project height (split) - 16x10

          width = 50vw - 2rem;
          height = (50vw - 8rem) / 16 * 10 = 31.25vw - 1.25rem

          Project height (single, small) - 10x16

          width = 100vw - 8rem;
          height = (100vw - 8rem) / 10 * 16 = 160vw - 12.8rem
        */
        fullpanel: "calc(100% - 4rem)",
        projectpanel: "31.25vw",
        projectpanellg: "62.5vw",
        projectpanelportrait: "calc(160vw - 8.8rem)",
        projectbox: "calc(31.25vw - 4rem)",
        projectboxlg: "calc(62.5vw - 4rem)",
        projectboxportrait: "calc(160vw - 12.8rem)",
        bannervertical: "8vh",
        bannerhorizontal: "8vw",
        "full+": "calc(100% + 2rem)",
      },
      boxShadow: {
        pill: "-5px 5px 15px -5px rgba(145,145,145,0.6)",
      },
      width: {
        fullpanel: "calc(100% - 4rem)",
        fulllinks: "calc(100% - 8rem)",
        projectpanel: "calc(50vw - 2rem)",
        projectbox: "calc(50vw - 6rem)",
        projectboxlg: "calc(100vw - 8rem)",
        halfpanel: "calc(50% - 4rem)",
        bannervertical: "8vh",
        bannerhorizontal: "8vw",
        "full+": "calc(100% + 2rem)",
      },
      translate: {
        raisescreenshot: "calc(-100% - 4rem)",
      },
      inset: {
        "1/6": "16.6666667%",
        74: "74rem",
      },
      borderWidth: {
        16: "16px",
        "16rem": "16rem",
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
