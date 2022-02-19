module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        montserratblack: "'Montserrat-Black', sans-serif"
      },
      colors: {
        'dark': '#0A0A0A',
        'light': '#F5F5F5',
        'accent': '#F6490D',
        'lightdark': '#cecece',
      },
      fontSize: {
        HD: ['60px', '60px'],
        HM: ['48px', '60px'],
        SH: ['18px', '28px'],
        BTN: ['16px', '24px'],
        BDY: ['18px', '28px'],
        SBDY: ['12px', '18px'],
      },
      letterSpacing: {
        'tight1': '0.0125em',
        'tight2': '0.015em',
        'tight3': '0.0225em',
      },
      borderWidth: {
        '25': '1.25px',
      },
    },
  },
  plugins: [],
}
