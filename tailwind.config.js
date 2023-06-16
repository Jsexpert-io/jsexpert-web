/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: '13px',
      colors: {
        primary: {

          '50': '#eeefff',
          '100': '#e0e1ff',
          '200': '#c7c8fe',
          '300': '#a8a6fb',
          '400': '#8d82f7',
          '500': '#7b64f0',
          '600': '#6d47e4',
          '700': '#5f39c9',
          '800': '#4d31a2',
          '900': '#412e81',
          '950': '#21173f',

        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

