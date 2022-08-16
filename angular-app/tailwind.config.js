module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#352442',
        'purple-medium': '#453057',
        'blue-light': '#0cb7fa',
        'blue-medium': '#1b75e3',
        'white': '#ffffff'
      },
      backgroundImage: {
        'bg-space': "url('./assets/img/bg.jpg')"
      }
    }
  },
  plugins: [],
}
