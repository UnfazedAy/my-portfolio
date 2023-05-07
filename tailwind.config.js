/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        fadedPink: 'hsl(13, 100% 96%)',
        lightGray: 'hsl(240, 5%, 92%)',
        brownishYellow: 'hsl(37, 97%, 73%)',
        thickBrownishYellow: 'hsl(39, 97%, 55%)',
        cloudBlue: 'hsl(190, 89%, 85%)',
        lightBlue: 'hsl(188, 85%, 95%)',
      }
    },
    fontFamily: {
      'lobster': ['Lobster', 'cursive'],
      'Raleway': ['Raleway', 'sans-serif']
    },
  },
  plugins: [],
}

