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
        'dia-1': "url('~assets/img/proyectos/dias/dia1.jpg')",
        'dia-2': "url('~assets/img/proyectos/dias/dia2.jpg')",
        'dia-3': "url('~assets/img/proyectos/dias/dia3.jpg')",
        'dia-4': "url('~assets/img/proyectos/dias/dia4.jpg')",
        'dia-5': "url('~assets/img/proyectos/dias/dia5.jpg')",
        'dia-6': "url('~assets/img/proyectos/dias/dia6.jpg')",
        'dia-7': "url('~assets/img/proyectos/dias/dia7.jpg')",
        'dia-8': "url('~assets/img/proyectos/dias/dia8.jpg')",
        'dia-9': "url('~assets/img/proyectos/dias/dia9.jpg')",
        'dia-10': "url('~assets/img/proyectos/dias/dia10.jpg')",
        'dia-11': "url('~assets/img/proyectos/dias/dia11.jpg')",
        // 'dia-12': "url('~assets/img/proyectos/dias/dia12.jpg')"
        'cuadro-1': "url('~assets/img/proyectos/cuadros/dia-1.png')",
        'cuadro-2': "url('~assets/img/proyectos/cuadros/dia-2.png')",
        'cuadro-3': "url('~assets/img/proyectos/cuadros/dia-3.png')",
        'cuadro-4': "url('~assets/img/proyectos/cuadros/dia-4.png')",
        'cuadro-5': "url('~assets/img/proyectos/cuadros/dia-5.png')",
        'cuadro-6': "url('~assets/img/proyectos/cuadros/dia-6.png')",
        'cuadro-7': "url('~assets/img/proyectos/cuadros/dia-7.png')",
        'cuadro-8': "url('~assets/img/proyectos/cuadros/dia-8.png')",
        'cuadro-9': "url('~assets/img/proyectos/cuadros/dia-9.png')",
        'cuadro-10': "url('~assets/img/proyectos/cuadros/dia-10.png')",
        'cuadro-11': "url('~assets/img/proyectos/cuadros/dia-11.png')",
        'cuadro-12': "url('~assets/img/proyectos/cuadros/dia-12.png')",
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
        yellowjuli: '#FFDF00', //#fed718
      },
      fontSize: {
        '7xl': '7rem',
        '11xl': '11rem',
        '12xl': '12rem',
        '16xl': '16rem',
        '17xl': '17rem',
      },
      spacing: {
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        80: '20rem',
        108: '27rem'
      },
      height : {
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        128: '32rem'
      },
      borderWidth: {
        14: '14px'
      }
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover'],
    transitionDuration: ['responsive', 'hover'],
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
