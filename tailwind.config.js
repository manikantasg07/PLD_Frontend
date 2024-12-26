/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        gridTemplateRows:{
            'layout': "10% auto 10%"
        },
        gridTemplateColumns:{
            'layout':"20% 80%"
        }
      },
    },
    plugins: [],
  }