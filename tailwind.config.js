const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      content: '1 0 auto',
      footer: '0 0 auto'
    },
    colors: {
      white: colors.white,
      grey: colors.coolGray,
      red: colors.red,
      black: colors.black,
      green: colors.green,
      purple: colors.purple,
      blue: colors.blue,
      'outer-space': '#343a40',
      'green-eucalyptus': '#28a745'
    },

    extend: {
      spacing: {
        5: '5px',
        10: '10px',
        30: '30px',
        '1/6': '16%'
      },

      margin: (theme) => ({
        auto: 'auto',
        ...theme('spacing')
      }),

      padding: (theme) => ({
        ...theme('spacing')
      }),

      maxWidth: {
        'image-cart': '6.25rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        980: '61.25rem',
        full: '100%',
        450: '450px',
        '1/3': '33%'
      },

      backgroundColor: theme => theme('colors'),

      borderColor: theme => ({
        ...theme('colors'),
        transparent: 'transparent'
      })
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textAlign: ['focus'],
      transitionDuration: ['focus']
    }
  },
  plugins: []
}
