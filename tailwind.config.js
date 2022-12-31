/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    
      animation: {
        linesquiz: "linesquiz 0.6s ease-in forwards",
      },
      keyframes: {
        linesquiz: {
          "0%, 100%": {
            width: "100%",
          },
          "50%": {
            width: "50%",
          },
        },
      },
      skew: {
        30: "30deg",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  mode: "jit",
  plugins: [require("daisyui")],
};
