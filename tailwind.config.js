/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jivi: ["Jivi"]
      },
      colors: {
        jiviBlue: "#0F67FE",
        jiviRed: "#FA4D5E",
        jiviGray: "#CCCCCC",
        jiviDarkGray: "#5D6A85",
        jiviLightGray: "#F2F5F9",
        jiviBlack: "#242E49",
      },
    },
  },
  plugins: [],
}

