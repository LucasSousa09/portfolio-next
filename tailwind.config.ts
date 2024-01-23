import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      margin: {
        18: '4.5rem',
        22: '5.5rem'
      },
      boxShadow: {
        'arr-light': '0 0 8px 1px rgba(0, 0, 0, 0.3)',
        'arr-dark': '0 0 4px 2px rgba(255, 255, 255, 0.4)',
      },
      textShadow: {
        light: '0 1px 6px rgba(0, 0, 0, .2)',
        dark: '0 1px 4px rgba(255, 255, 255, .4)',
        "light-md": '0 2px 4px rgba(0, 0, 0, .6)',
        "dark-md": '0 2px 4px rgba(255, 255, 255, .8)'
      },
      maxWidth: {
        '8xl': '1440px'
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: '0', filter: 'blur(4px)', transform: 'translateY(-40px)'},
          '100%' : { opacity: '1', filter: 'blur(0)' }
        }
      },
      animation: {
        'fade-out': 'fade-out 3s ease-in-out forwards'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};

export default config;
