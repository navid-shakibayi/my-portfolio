/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          color1: '#171717',
          color2: '#F9F6EE',
          color3: '#27AE60',
        },
      },
    },

    fontFamily: {
      'dmsans-thin': ['dmsans-thin'],
      'dmsans-extraLight': ['dmsans-extraLight'],
      'dmsans-light': ['dmsans-light'],
      'dmsans-regular': ['dmsans-regular'],
      'dmsans-medium': ['dmsans-medium'],
      'dmsans-semiBold': ['dmsans-semiBold'],
      'dmsans-bold': ['dmsans-bold'],
      'dmsans-extraBold': ['dmsans-extraBold'],
      'dmsans-black': ['dmsans-black'],
    },
  },
  plugins: [],
}

