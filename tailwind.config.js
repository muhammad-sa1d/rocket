/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto',],
      },
      spacing: {
        '128': '32rem',
        '700': '700px',
        '738': '738px',
        '600': '589px',
        '576': '576px',
        '70': '70px',
        '783': '755px',
        '989': '989px',
        '667': '667px',
        '876': '620px',
        '427': '427px',
      },
      maxWidth: {
        '1316': '1316px',
        '864': '1002px',
      },
      colors: {
        'regal-black': '#121229',
        'regal-blue': '#7371ff',
        'regal-grey': '#39394f',
        'regal-blue-2': '#3898EC',
        'regal-puple': '#ffe4b0',
        'regal-grey-1': '#e1e0ff',
        'regal-blue-3': '#c3edff',
        'regal-grey-2': '#39394f',
        'regal-blue-4': '#e6f1ff',
        'regal-puple-2': '#f2eaff',
      },
    },
  },
  plugins: [],
}
