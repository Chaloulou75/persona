/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pagina-n': "url('~assets/img/paginaN/PAGINAN.svg')",
        'pagina-r': "url('~assets/img/paginaR/PAGINAR.svg')",
      }),
      colors: {
        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
          ternary: 'var(--bg-background-ternary)',
        },
        copy: {
          primary: 'var(--text-copy-primary)',
          secondary: 'var(--text-copy-secondary)',
          ternary: 'var(--text-copy-ternary)',
        },
        gold: '#FFDF00',
        bluejuli: '#008aae',
        redjuli: "#f23941",
        yellowjuli: '#fed718',
      },
      fontSize: {
        '7xl': '7rem',
        '11xl': '11rem',
      },
      spacing: {
        80: '20rem',
        108: '27rem'
      },
      borderWidth: {
        14: '14px'
      }
    },
  },
  variants: {
  },
  plugins: [
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
