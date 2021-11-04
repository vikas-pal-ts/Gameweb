module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black:{
        'light': '#EBEBF5',
        'dark': '#141414',
        'medium': '#2F2F2F'
      },

      blue: '#0061FD',

      green: {
        'light': '#B1DD8B',
        'dark': '#38571A'
      },
      
      white: '#FFFFFF',
      grey: {
        'border': '#38383A'
      }
    },

    fontFamily: {
      mont:['Montserrat']
    },

    // spacing: {
    //   '4': '1rem',
    //   '6': '0.375rem',
    //   '8': '0.5rem',
    //   '10': '0.625rem',
    //   '12': '0.75rem',
    //   '16': '1rem',
    //   '18': '1.125rem',
    //   '20': '1.25rem',
    //   '24': '1.5rem',
    //   '30': '1.875rem',
    //   '32': '2rem',
    //   '36': '2.25rem',
    //   '48': '3rem',
    //   '56': '3.5rem',
    //   '60': '3.75rem',
    //   '64': '4rem',
    //   '96': '6rem'
    // },

    extend: {
      spacing: {
        '57' :'14.25rem',
        '0.5':'0.5px',
        '227': '56.75rem',
        '112': '28rem'
      },
      fontFamily: ['hover', 'focus'], 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
