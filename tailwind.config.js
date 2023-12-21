const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  'darkMode':'class',
  theme: {
    fontFamily:{
      'OpenDyslexic':['OpenDyslexic','system-ui'],
      'RobotoCondensed':['RobotoCondensed','sans-serif'],
      'ArialNarrow':['ArialNarrow','sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        green_uncp:'#135539',
        gray_uncp: '#3e3e3e',
        yellow_uncp: '#ffa443'
      },
    },
  },
  plugins: [
    plugin(({addVariant,e})=>{
      addVariant('extra',({modifySelectors, separator})=>{
        modifySelectors(({className})=>{
          return `.extra .${e(`extra${separator}${className}`)}`
        })
      })
    }),
    plugin(({addVariant,e})=>{
      addVariant('contraste',({modifySelectors, separator})=>{
        modifySelectors(({className})=>{
          return `.contraste .${e(`contraste${separator}${className}`)}`
        })
      })
    }),
  ],
}
