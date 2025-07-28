/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "corporate",
      "bumblebee",
      "black",
      "luxury",
      "pastel",
      "coffee",
      "retro",
      "dracula"
    ],
  }
}