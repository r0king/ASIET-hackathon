/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      animation: {
        'linesquiz': 'linesquiz 0.6s ease-in forwards',
      },
      keyframes: {
        linesquiz: {
          '0%, 100%': {
            'width': '100%'
          },
          '50%': {
            'width': '50%'
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

