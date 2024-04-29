/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        fullvh: '100vh',
      },
      colors: {
        DarkBlue: '#11175D',
        Black: "#000000",
        Btncolor:"#5F35F5",
      }
    },
    fontFamily: {
      'Nunito': ['Nunito', 'sans-serif', ],
      "Open Sans":["Open Sans","sans-serif"],
      
    }
  },
  plugins: [],
};

