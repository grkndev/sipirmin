/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        dark:"#0D0D0D",
        lightdark:"#171717",
        semidark:"#0A0A0A"
      }
    },
  },
  plugins: [],
}

