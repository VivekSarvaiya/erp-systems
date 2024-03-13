/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#424242",
        bgPrimary: "#eceff180",
        accent: "#78909C",
        accentLight: "#546E7A",
      }
    },
  },
  plugins: [],
}