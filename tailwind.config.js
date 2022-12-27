/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins',
      },
      fontSize: {
        '3.5xl': '2.125rem',
      },
      colors: {
        background: {
          light: '#F3F3F3',
          dark: '#232323',
        },
        text: {
          light: '#333333',
          dark: '#EEEEEE',
        },
        worksLink: '#999999',
      },
      margin: {
        15: '3.75rem',
      },
      width: {
        desktop: '1440px',
      },
      maxWidth: {
        desktop: '1440px',
      },
      screens: {
        xs: '340px',
      },
    },
  },
  plugins: [],
}
