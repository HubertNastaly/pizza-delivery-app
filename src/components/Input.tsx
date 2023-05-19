import { styled } from "../theme";

export const Input = styled('input', {
  padding: 8,
  borderRadius: 0,
  border: '1px solid $disabled',
  
  variants: {
    error: {
      true: {
        borderColor: '$danger'
      }
    }
  }
})
