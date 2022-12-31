/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      variants: {
        translate: ['group-hover'],
        brightness: ['group-hover'],
        gradientColorStops: ['group-hover'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"), 
  ],
}
