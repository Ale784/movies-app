/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark_theme: '#121212',
        surface: '#2E2C2C',
        primary: '#BB86FC',
        primary_variant: '#d3d3d3',
        secondary: '#03DAC6',
        font_color: '#121212'
      },
      fontFamily: {

      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px'
      }
    }
  }
}
