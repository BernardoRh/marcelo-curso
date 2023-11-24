import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      default: 'Roboto, sans-serif',
    },
    colors: {
      greenCyan: '#7AFAD1',
      lightBlue: '#7AE3FA',
      lightGreen: '#7AFA91',
      gray: '#292929',
    },
    fontSizes: {
      sm: '0.75rem',
      md: '1rem',
      lg: '1.75rem',
    },
  },
})
