module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },

      backgroundImage: theme => ({
        'homebanner': "url('https://images.unsplash.com/photo-1565001057204-270ce1077ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')",

        'lowerbanner':"url('https://images.unsplash.com/photo-1490130782613-03a06df0c0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      }),

      height: theme => ({
        "screen/2": "50vh",
        "required":"470px",
        "screen-40":"calc(100vh*4/10)",
        "screen-60":"calc(100vh*6/10)",
        "screen-70":"calc(100vh*7/10)",
        "screen-80":"calc(100vh*8/10)",
      }),

      spacing: {
        '92percent': '92%',
        '94percent': '94%'
      },

      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },

      fontFamily: {
        'Belgrano':'Belgrano',
        'DMSans':'DM Sans',
        'DMSerifDisplay':'DM Serif Display',
        'Montserrat':'Montserrat',
        'Poppins':'Poppins',
        'Nunito':'Nunito',
      },
  
    },
  },
  plugins: [],
}
