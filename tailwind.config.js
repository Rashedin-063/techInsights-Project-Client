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
        'faded-pearl': '#E6DFAF',
        'midnight-gray': '#1e1e1e',
        'deep-ocean': '#004080',
        'green-lantern': '#046645',
        'pure-white': '#FFFFFF',
        'charcoal-gray': '#000000',
      },
    },
  },
  plugins: [require('daisyui')],
};
