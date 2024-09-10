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
        'faded-pearl': '#dcdccd',
        'midnight-gray': '#708096',
        'deep-ocean': '#004080',
        'green-lantern': '#046645',
        'pure-white': '#FFFFFF',
        'charcoal-gray': '#333333',
      },
    },
  },
  plugins: [require('daisyui')],
};
