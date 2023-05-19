import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import { MenuItem, Order } from "../types"
import { ListItem } from "./List"
import { useOrder } from "../providers"
import { useFormContext } from "react-hook-form"
import { formatPrice } from "../utils/formatPrice"
import { styled } from '../theme'

interface Props {
  menuItem: MenuItem
  description?: string
}

export const MenuListItem = ({ description, menuItem }: Props) => {
  const { id, name, price } = menuItem
  const { addMenuItem, removeMenuItem } = useOrder()
  const { watch } = useFormContext<Order>()

  const items = watch('items')
  const quantity = items.find(({ type }) => type.id === id)?.quantity ?? 0

  return (
    <ListItem>
      <TextGroup>
        <TopLine>
          <ItemName>{name}</ItemName>
          <ItemPrice>{formatPrice(price)}</ItemPrice>
          <QuantityControl>
            <ControlButton onClick={() => removeMenuItem(menuItem)} disabled={quantity === 0}>
              <HiOutlineMinusCircle size={24} />
            </ControlButton>
            <Quantity>{quantity}</Quantity>
            <ControlButton onClick={() => addMenuItem(menuItem)}>
              <HiOutlinePlusCircle size={24} />
            </ControlButton>
          </QuantityControl>
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
  gap: 16
})

const ItemName = styled('span', {
  flex: 1,
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
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        cursor: 'default',
        color: '$disabled'
      }
    }
  }
})
