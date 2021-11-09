module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        minus45: "-45deg",
        45: "45deg",
      },
      inset: {
        fulloffset: "calc(100% - 2em)",
        "1/6": "16.6666667%",
      },
      borderWidth: {
        16: "16px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
