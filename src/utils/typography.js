import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400'],
    },
    {
      name: 'Open Sans',
      styles: ['300'],
    },
    { name: 'Lato', styles: ['300'] },
    { name: 'Merriweather', styles: ['400'] },
  ],
  headerFontFamily: ['Georgia', 'serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],
})

export default typography
