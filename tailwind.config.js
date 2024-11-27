/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.js"],
  theme: {
    extend: {  fontFamily: {
      sans: ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'], 
    },},
  },
  plugins: [],
}

