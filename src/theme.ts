import { mauve, orange, red } from "@radix-ui/colors";
import { createStitches, globalCss } from "@stitches/react";

const { styled, theme, keyframes } = createStitches({
  theme: {
    colors: {
      white: 'white',
      black: 'black',
      primary: orange.orange11,
      danger: red.red11,
      disabled: mauve.mauve9,
    },
    fonts: {
      regular: 'Roboto'
    },
    fontSizes: {
      regular: '16px',
      small: '12px'
    }
  }
})

const globalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Licorice&family=Roboto:ital,wght@0,300;0,700;1,300&family=Source+Sans+Pro&display=swap')"
  ]
})

export { styled, theme, keyframes, globalStyles }
