import { orange } from "@radix-ui/colors";
import { styled } from "@stitches/react";

export const Button = styled('button', {
  all: 'unset',
  width: 180,
  display: 'block',
  padding: '8px 16px',
  border: `1px solid ${orange.orange11}`,
  cursor: 'pointer',
  textAlign: 'center',
})
