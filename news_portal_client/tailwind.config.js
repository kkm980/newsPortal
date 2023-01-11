/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  extend: {
   
  },
  theme: {
    screens: {
      'sm': { 'max': '450px' },
      'md': { 'max': '800px' },
      'lg': { 'max': '1130px' },
      'xl': { 'max': '1550px' },
      'xllg': {'max':"1350px", 'min':'800px'}
    },
    extend: {
      fontFamily: {
      abc:[ 'Sofia Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
