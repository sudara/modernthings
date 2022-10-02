/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter var'],
        heading: ['Audiowide'],
      },
      colors: {
        body: 'rgba(80,86,95,1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
