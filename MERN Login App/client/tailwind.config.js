/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Lato', 'sans-serif']
      },
      colors: {
        accentblue: '#0093e7',
        textblue: '#1273ab'
      }
    },
  },
  plugins: [],
}
