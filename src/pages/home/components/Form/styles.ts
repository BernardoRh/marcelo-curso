import { styled } from '../../../../../stitches.config'

export const FormContainer = styled('form', {
  width: 512,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const FormLabel = styled('label', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  textarea: {
    resize: 'none',
    padding: '0.5rem',
  },
})
