module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'modal': "10000000000000000000000000000000000"
      }
    }
  },
  plugins: [],
}