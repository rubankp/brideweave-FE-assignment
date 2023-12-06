/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3498db', 
        secondary: '#2ecc71',
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [],
}

