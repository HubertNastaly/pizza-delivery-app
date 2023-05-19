import { mauve, orange } from "@radix-ui/colors";
import { styled } from "@stitches/react";

export const Button = styled('button', {
  all: 'unset',
  width: 180,
  display: 'block',
  padding: '8px 16px',
  cursor: 'pointer',
  textAlign: 'center',

  variants: {
    view: {
      filled: {
        color: 'white',
        background: orange.orange11
      },
      outlined: {
        border: `1px solid ${orange.orange11}`,
      }
    },
    disabled: {
      true: {
        border: `1px solid ${mauve.mauve9}`,
        color: mauve.mauve9,
        cursor: 'default'
      }
    }
  },

  defaultVariants: {
    view: 'outlined'
  }
})
