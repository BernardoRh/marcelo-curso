import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: '$default',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',

    '*:focus': {
      outline: '2px solid $lightBlue',
    },
  },
})
