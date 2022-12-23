/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins',
      },
      colors: {
        brand: {
          light: '#333333',
          dark: '#232323',
        },
      },
      width: {
        desktop: '1440px',
      },
      maxWidth: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
