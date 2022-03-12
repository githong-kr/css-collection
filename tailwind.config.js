const { readBuilderProgram } = require('typescript');
const plugin = require('tailwindcss/plugin');

const lightBeam = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-perspective': {
      transform: 'perspective(500px) rotateY(-70deg)',
    },
    '.perspective': {
      transform: 'perspective(900px)',
    },
    '.transform-style': {
      transformStyle: 'preserve-3d',
    },
  });
});

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        bulb: ['0 0px 5px #fff', '0 0px 10px #fff', '0 0px 15px #fff'],
      },
      boxShadow: {
        calc: [
          '25px 25px 75px rgba(0, 0, 0, 0.25)',
          '10px 10px 70px rgba(0, 0, 0, 0.25)',
          'inset -5px -5px 15px rgba(0, 0, 0, 0.5)',
          'inset 5px 5px 15px rgba(0, 0, 0, 0.5)',
        ],
        calc_num: [
          'inset -8px 0 8px rgba(0, 0, 0, 0.15)',
          'inset 0 -8px 8px rgba(0, 0, 0, 0.25)',
          '0 0 0 2px rgba(0, 0, 0, 0.75)',
          '10px 20px 25px rgba(0,0,0,0.4)',
        ],
        calc_num_before: [
          '-5px -5px 15px rgba(0, 0, 0, 0.1)',
          '10px 5px 10px rgba(0, 0, 0, 0.15)',
        ],
      },
      keyframes: {
        roadPass: {
          '0%': { backgroundPosition: '50px 0' },
          '100%': { backgroundPosition: '0 0' },
        },
        drunkenTaxi: {
          '0%': { transform: 'translateX(20px) translateY(-20px)'},
          '25%': { transform: 'translateX(-10px) translateY(0px)'},
          '50%': { transform: 'translateX(20px) translateY(20px)'},
          '75%': { transform: 'translateX(-10px) translateY(0px)'},
          '100%': { transform: 'translateX(20px) translateY(-20px)'},
        },
      },
      rotate: {
        'y-50': { transform: 'rotateY(-50deg)' },
      },
    },
  },
  plugins: [lightBeam],
};
