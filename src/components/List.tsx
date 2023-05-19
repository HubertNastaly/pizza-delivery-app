import { styled } from "../theme"

export const List = styled('ul', {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 32
})

export const ListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: 32
})
