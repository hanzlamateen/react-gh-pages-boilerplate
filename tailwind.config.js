module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          'primary-content': 'white',
          primary: 'white',
          secondary: '#AB883F'
        }
      }
    ]
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
