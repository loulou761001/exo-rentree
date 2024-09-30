/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#c0f497',
        'darker-green': '#36463D',
        'dark-green': '#28A263',
        'medium-green': '#2DDB81',
        'brand-white': "#F7F7F7",
        'brand-grey': '#808080',
        'brand-black': '#1B1B1B'
    },
  },
  plugins: [],
}

