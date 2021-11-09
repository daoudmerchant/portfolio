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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
