module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {},
    },
    corePlugins: {
      container: false
    },
    plugins: [
      function ({addComponents}){
        addComponents({
          '.container':{
            maxWidth:'100%',
            '@screen sm':{
              maxWidth:'540px',
            },
            '@screen md':{
              maxWidth:'720px',
            },
            '@screen lg':{
              maxWidth:'992px',
            },
            '@screen xl':{
              maxWidth:'1140px',
            },
            '@screen 2xl':{
              maxWidth:'1320px',
            },
          }
        })
      },
      function ({addComponents}){
        addComponents({
          '.container-fluid':{
            width:'100%',
          }
        })
      }
    ],
  }