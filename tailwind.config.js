module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        screens: {
          'cxl': '1350px',
        },
      },
    },
    corePlugins: {
      container: false
    },
    plugins: [
      function ({addComponents}){
        addComponents({
          '.container':{
            maxWidth:'100%',
            paddingInline:'15px',
            '@screen cxl':{
              maxWidth:'1320px',
            },
          }
        })
      },
      function ({addComponents}){
        addComponents({
          '.container-fluid':{
            width:'100%',
            paddingInline:'15px',
            '@screen cxl':{
              maxWidth:'100%',
              paddingInline:'8rem'
            },
          }
        })
      }
    ],
  }