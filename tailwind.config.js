/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      variants: {
        translate: ["group-hover"],
        brightness: ["group-hover"],
        gradientColorStops: ["group-hover"],
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
    brightness: {
      // Add the 'group-hover' variant to the 'brightness' theme object
      "group-hover": "brightness(90%)",
      // Other brightness variations go here
    },
    translate: {
      // Add the 'group-hover' variant to the 'translate' theme object
      "group-hover": "translate(1px, 1px)",
      // Other translate variations go here
    },
    gradientColorStops: {
      // Add the 'group-hover' variant to the 'gradientColorStops' theme object
      "group-hover": "#fff, #000",
      // Other gradientColorStops variations go here
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("daisyui")],
};
