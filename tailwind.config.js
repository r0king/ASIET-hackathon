/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
  plugins: [require("daisyui")],
};
