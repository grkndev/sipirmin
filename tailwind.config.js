/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./screens/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        dark:"#0B0B0B",
        titleDark:"#171717",
        areaDark:"#0D0D0D",
        textDark:"#8B8B8B",
        borderDark:"#232323",
        selectDark:"#292929",
        selectedDark:"#393939",
      }
    },
  },
  plugins: [],
}

