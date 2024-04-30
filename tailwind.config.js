/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/src/imagens/bg.png')"
    },
  },
  plugins: [],
},
}