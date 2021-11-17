const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.rose,
      blue: colors.blue,
      green: colors.green,
      indigo: colors.indigo,
      yellow: colors.amber,
      primary: {
        light: '#981f2c',
        DEFAULT: '#ba2737',
        dark: '#ca656e'
      }
    },
    extend: {
      backgroundImage: {
        'landing-pattern': "url('~assets/img/landing-bg.png')"
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
