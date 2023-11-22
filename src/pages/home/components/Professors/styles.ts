import { styled } from '@stitches/react'
import Image from 'next/image'

export const ProfessorsContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '4rem',
  rowGap: '2rem',
  marginTop: '4rem',
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
    },

    h4: {
      fontSize: '$md',
    },
  },

  p: {
    fontSize: '$sm',
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

export const ProfessorAvatar = styled(Image, {
  border: 0,
  width: '12rem',
  height: '12rem',
  borderRadius: '9999px',
})
