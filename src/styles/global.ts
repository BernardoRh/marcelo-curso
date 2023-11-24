import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: '$default',
    color: '$gray',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },
})
