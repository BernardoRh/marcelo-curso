import { styled } from '../../../../../stitches.config'

export const FormContainer = styled('form', {
  maxWidth: 512,
  minWidth: 352,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
})

export const UserFormApp = styled('div', {
  display: 'grid',
  width: 512,
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',

  '@media(max-width: 530px)': {
    width: 312,
  },
})

export const UserFormLabel = styled('label', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  alignSelf: 'center',
  justifySelf: 'center',

  span: {
    marginLeft: '0.25rem',
  },

  input: {
    width: '100%',
    resize: 'none',
    padding: '0.5rem',
    border: '2px solid transparent',
    borderRadius: '4px',
    outline: '2px solid black',

    '&:focus': {
      outline: '2px solid $lightBlue',
    },

    height: 24,
  },

  variants: {
    occupation: {
      true: {
        gridColumnStart: 1,
        gridColumnEnd: 3,
      },
      false: {},
    },
  },
})

export const FormLabel = styled('label', {
  width: 512,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  textarea: {
    width: '100%',
    resize: 'none',
    padding: '0.5rem',
    border: '2px solid transparent',
    borderRadius: '4px',
    outline: '2px solid black',

    '&:focus': {
      outline: '2px solid $lightBlue',
    },

    height: 116,
  },

  '@media(max-width: 530px)': {
    width: 312,
  },
})
