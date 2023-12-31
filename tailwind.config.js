/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xl': {'max':'1200px'},
      'lg': {'max':'991px'},
      'md': {'max':'767px'},
      'sm': {'max':'550px'},
      'xsm': {'max':'425px'},
    }
  },
  plugins: [],
}