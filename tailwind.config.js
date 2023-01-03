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
      zIndex: {"-1": "-1", },
      
      fontSize: {
        '10xl': ['12rem', { lineHeight: '1' }],
        '12xl': ['16rem', { lineHeight: '1' }],
      },
      animation: {
        'btn34-left': 'anim1-btn34 1s linear infinite',
        'btn34-top': 'anim2-btn34 1s linear infinite',
        'btn34-right': 'anim3-btn34 1s linear infinite',
        'btn34-bottom': 'anim4-btn34 1s linear infinite',
        'flick': 'flick 3s infinite',
      'blink': 'blink 3s 2s infinite',
      'blinkfast': 'blink 10s 1s infinite',
      },
      keyframes: {
        'anim1-btn34': {
          '0%': {
            'left': '-100%',
          },
          '50%, 100%': {
            'left': '100%',
          },
        },
        'anim2-btn34': {
          '0%': {
            'top': '-100%',
          },
          '50%, 100%': {
            'top': '100%',
          },
        },
        'anim3-btn34': {
          '0%': {
            'right': '-100%',
          },
          '50%, 100%': {
            'right': '100%',
          },
        },
        'anim4-btn34': {
          '0%': {
            'bottom': '-100%',
          },
          '50%, 100%': {
            'bottom': '100%',
          },
        },
        flick: {
          '0%, 24%, 42%, 68%, 100%': {
            'opacity': '1',
          },
          '16%, 20%, 28%, 44%, 60%': {
            'opacity': '0.98',
          },
          '8%, 14%, 26%, 39%, 46%, 72%, 95%': {
            'opacity': '0.95',
          },
          '11%, 19%, 37%, 93%, 97%': {
            'opacity': '0.92',
          },
          '4%, 10%, 12%, 17%, 56%, 58%, 70%': {
            'opacity': '0.9',
          },
          '6%': {
            'opacity': '0.85',
          },
          '38%': {
            'opacity': '0.5',
          },
        },
        blink: {
          '0%, 22%, 36%, 75%': {
            'color': '#F1F1F1',
            'text-shadow': "0 0 0.6rem #F1F1F1, 0 0 1.5rem #F1F1F1, -0.2rem 0.1rem 1rem #F1F1F1, 0.2rem 0.1rem 1rem #F1F1F1, 0 -0.5rem 2rem #E2DCC8, 0 0.5rem 3rem #E2DCC8",
          },
          '28%, 33%': {
            'color': '#F1F1F1',
            'text-shadow': 'none',
          },
          '82%, 97%': {
            'color': '#F1F1F1',
            'text-shadow': 'none',
          },
        },
      },
      fontFamily: {
        'clip': ['Clip', 'Helvetica', 'Arial', 'sans-serif']
      },
    }
  },
  mode: "jit",
  plugins: [require("daisyui")],
};
