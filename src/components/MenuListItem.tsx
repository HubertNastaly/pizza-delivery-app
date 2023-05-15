import { styled } from "@stitches/react"
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import { Price } from "../types"
import { ListItem } from "./List"

interface Props {
  name: string
  price: Price
  quantity: number
  setQuantity: (value: number) => void
  description?: string
}

export const MenuListItem = ({ name, price, description, quantity, setQuantity }: Props) => {
  return (
    <ListItem>
      <TextGroup>
        <TopLine>
          <ItemName>{name}</ItemName>
          <ItemPrice>{price} PLN</ItemPrice>
        </TopLine>
        {description && (
          <Description>{description}</Description>
        )}
      </TextGroup>
      <QuantityControl>
        <ControlButton onClick={() => setQuantity(quantity - 1)} disabled={quantity === 0}>
          <HiOutlineMinusCircle size={24} />
        </ControlButton>
        <Quantity>{quantity}</Quantity>
        <ControlButton onClick={() => setQuantity(quantity + 1)}>
          <HiOutlinePlusCircle size={24} />
        </ControlButton>
      </QuantityControl>
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

const QuantityControl = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 8
})

const Quantity = styled('span', {

})

const ControlButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  borderRadius: '50%',
  border: 'none',
  background: 'none',
  cursor: 'pointer'
})
