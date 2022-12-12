/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      'login-bg': "url('./img/banner2.jpg')"
    }
  },
  plugins: [require('@tailwindcss/forms'),],
}
