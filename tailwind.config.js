/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {},
    brightness: {
      // Add the 'group-hover' variant to the 'brightness' theme object
      'group-hover': 'brightness(90%)',
      // Other brightness variations go here
    },
    translate: {
      // Add the 'group-hover' variant to the 'translate' theme object
      'group-hover': 'translate(1px, 1px)',
      // Other translate variations go here
    },
    gradientColorStops: {
      // Add the 'group-hover' variant to the 'gradientColorStops' theme object
      'group-hover': '#fff, #000',
      // Other gradientColorStops variations go here
    },
  },
  plugins: [require("daisyui")],
}
