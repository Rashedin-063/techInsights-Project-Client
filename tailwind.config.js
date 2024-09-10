/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      raleway: "'Raleway', sans-serif",
      wendy: "'Wendy One', sans-serif",
      sevillana: "'Sevillana', cursive",
    },
    extend: {
      colors: {
        'faded-pearl': '##dcdccd',
        'midnight-gray': '#2e2e2e',
        'deep-ocean': '#004a99f6',
        'green-lantern': '#014d4e',
        'pure-white': '##FFFFFF',
      },
    },
  },
  plugins: [require('daisyui')],
};
