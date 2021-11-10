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
      },
      inset: {
        "1/6": "16.6666667%",
        74: "74rem",
      },
      borderWidth: {
        16: "16px",
      },
      outline: {
        white: "2px solid white",
        black: "2px solid black",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
