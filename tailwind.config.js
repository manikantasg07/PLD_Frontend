/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        "layout": "10% auto 10%"
      },
      gridTemplateColumns:{
        "layout" : "20% 80%"
      }
    },
  },
  plugins: [],
}

