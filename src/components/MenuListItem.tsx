import { styled } from "@stitches/react"
import { Price } from "../types"
import { ListItem } from "./List"

interface Props {
  name: string
  price: Price
  quantity: number
  setQuantity: (value: number) => void
  description?: string
}

export const MenuListItem = ({ name, price, description }: Props) => {
  return (
    <ListItem>
      <TextGroup>
        <TopLine>
          <ItemName>{name}</ItemName>
          <ItemPrice>{price}</ItemPrice>
        </TopLine>
        {description && (
          <Description>{description}</Description>
        )}
      </TextGroup>
    </ListItem>
  )
}

const TextGroup = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch'
})

const TopLine = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const ItemName = styled('span', {
  fontWeight: 'bold'
})

const ItemPrice = styled('span', {
  fontWeight: 'bold'
})

const Description = styled('p', {
  margin: 0,
  fontStyle: 'italic'
})
