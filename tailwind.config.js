/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "some-white":"rgb(213, 225, 239)",
        "Dark-blue":"rgb(31, 42, 66)",
      },
      boxShadow:{
        "QR":"0px 0px 55px 0px rgba(0, 0, 0, 0.1)",
      },
      fontFamily:{
        "Outfit":["Outfit","sans-serif"]
      }
    },
  },
  plugins: [],
}

