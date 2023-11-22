import { styled } from '@stitches/react'
import Image from 'next/image'

export const ProfessorsContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '3rem',
  rowGap: '2rem',
  marginTop: '4rem',

  '@media(max-width: 810px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ProfessorInformation = styled('div', {
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

  p: {
    fontSize: '$sm',
  },

  variants: {
    occupation: {
      true: {
        '@media(min-width: 810px)': {
          gridColumnStart: 1,
          gridColumnEnd: 3,
        },
      },
      false: {},
    },
  },
})

export const ProfessorAvatar = styled(Image, {
  border: 0,
  width: '12rem',
  height: '12rem',
  borderRadius: '9999px',
})
