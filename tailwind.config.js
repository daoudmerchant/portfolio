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
        fullpanel: "calc(100% - 4rem)",
      },
      width: {
        fullpanel: "calc(100% - 4rem)",
        halfpanel: "calc(50% - 4rem)",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
