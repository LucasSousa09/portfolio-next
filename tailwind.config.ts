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
      boxShadow: {
        'arr-light': '0 0 8px 1px rgba(0, 0, 0, 0.3)',
        'arr-dark': '0 0 4px 2px rgba(255, 255, 255, 0.4)',
      },
      textShadow: {
        light: '0 1px 6px rgba(0, 0, 0, .2)',
        dark: '0 1px 4px rgba(255, 255, 255, .4)',
        "light-md": '0 2px 4px rgba(0, 0, 0, .4)',
        "dark-md": '0 2px 4px rgba(255, 255, 255, .8)'
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};

export default config;
