import { styled } from '../theme'

export const Button = styled('button', {
  all: 'unset',
  width: 180,
  display: 'block',
  padding: '8px 16px',
  cursor: 'pointer',
  textAlign: 'center',
  fontFamily: 'inherit',

  variants: {
    view: {
      filled: {
        color: '$white',
        background: '$primary'
      },
      outlined: {
        border: `1px solid $primary`,
      }
    },
    disabled: {
      true: {
        border: `1px solid $disabled`,
        color: '$disabled',
        cursor: 'default'
      }
    }
  },

  defaultVariants: {
    view: 'outlined'
  }
})
