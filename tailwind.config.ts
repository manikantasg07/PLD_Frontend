/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        gridTemplateRows:{
            'layout': "10% auto 10%"
        },
        gridTemplateColumns:{
            'layout':"20% 80%"
        },
        padding: {
          '50': '50px',
        }
      },
    },
    plugins: [],
  }