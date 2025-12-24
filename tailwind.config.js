/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#07D28F',
       
        
      },
      fontFamily: {
        aileron: ["Aileron", "sans-serif"],
        hagrid: ["Hagrid", "sans-serif"],
        inter:['Inter', 'sans-serif']
      },
       
    },
  },
  plugins: [],
}
