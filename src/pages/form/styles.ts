import Image from 'next/image'
import { styled } from '../../../stitches.config'

export const FormContainer = styled('form', {
  height: 'auto',
  maxWidth: 'calc(100vw - 16rem)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  margin: '2rem 8rem',
  marginTop: '3rem',
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

export const ProfessorInformationOnForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  textAlign: 'center',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    h3: {
      fontSize: '$lg',
      lineHeight: '1.5rem',

      '@media(max-width: 910px)': {
        fontSize: '150%',
      },

      '@media(max-width: 810px)': {
        fontSize: '130%',
      },
    },

    h4: {
      fontSize: '$md',

      '@media(max-width: 910px)': {
        fontSize: '100%',
      },

      '@media(max-width: 810px)': {
        fontSize: '90%',
      },
    },
  },
})

export const ProfessorAvatar = styled(Image, {
  border: 0,
  width: '12rem',
  height: '12rem',
  borderRadius: '9999px',
})
