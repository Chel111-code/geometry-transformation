/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans'], // 'NamaFont' adalah nama font yang Anda tentukan di langkah sebelumnya
      },

      colors: {
        primary: '#094067',
        secondary: '#5F6C7B',
        blue: '#8FBFFF',
        ungu: '#6A6AFF',
        red: '#EF4565',
        hijau: '#079292',
      },

      boxShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },

      keyframes: {
        transformation: {
          '0%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
          '50%': {
            clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
          },
          '100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
        },

        translate: {
          '0%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(75px)',
          },
          '50%': {
            transform: 'translateX(25px)',
          },
          '75%': {
            transform: 'translateX(150px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },

      animation: {
        transformation: 'transformation 3s linear infinite',
        translate: 'translate 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
