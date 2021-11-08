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
        "60px": "60px",
        "80px": "80px",
        "9/10": "90%",
        "1/10": "10%",
      },
      height: {
        "60px": "60px",
        "80px": "80px",
        "2vw": "2vw",
        "9/10": "90%",
        "1/10": "10%",
      },
      inset: {
        "30px": "30px",
        "40px": "40px",
        "60px": "60px",
        "80px": "80px",
      },
      fontSize: {
        "40px": "40px",
        "60px": "60px",
      },
      // animation
      keyframes: {
        swipeleft: {
          "100%": { width: 0 },
        },
        swipedown: {
          "100%": { height: 0 },
        },
      },
      animation: {
        swipeleft: "swipeleft 1s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
