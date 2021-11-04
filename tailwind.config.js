module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        minus45: "-45deg",
        45: "45deg",
      },
      width: {
        "9/10": "90%",
      },
      height: {
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
