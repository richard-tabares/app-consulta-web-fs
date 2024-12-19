/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    container: {
      'center': true,
    },
    screens: {
      'sm': '352px',
      'md': '652px'
    },
    'fontFamily': {
      'sans': 'Roboto, sans-serif'
    },
    extend: {
      colors: {
        'background': '#EFEFEF',
        'line': '#D7E0E9',
        'link': '#0A6CD0',
        'label': '#08539F',
        'blue': '#063A6E',
      },
    },
  },
  plugins: [],
}

