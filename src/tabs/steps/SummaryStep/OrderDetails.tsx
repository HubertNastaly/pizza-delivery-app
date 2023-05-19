import { List, ListItem } from "../../../components"
import { useFormContext } from "react-hook-form"
import { Order } from "../../../types"
import { useMemo } from "react"
import { formatPrice } from "../../../utils/formatPrice"
import { styled } from "../../../theme"

export const OrderDetails = () => {
  const { getValues } = useFormContext<Order>()
  const items = getValues('items')

  const deliveryCost = 5
  const totalCost = useMemo(() => items.reduce((sum, { quantity, type: { price }}) => sum + quantity * price, deliveryCost), [items, deliveryCost])

  return (
    <OrderItemsList>
      {items.map(({ type: { id, name, price }, quantity }) => (
        <OrderedItem key={id}>
          {name} x{quantity}
          <Price>
            {formatPrice(price * quantity)}
          </Price>
        </OrderedItem>
      ))}
      <OrderedItem key="delivery">
        Delivery
        <Price>
          {formatPrice(deliveryCost)}
        </Price>
      </OrderedItem>
      <TotalPriceRow>
        Razem
        <Price>
          {formatPrice(totalCost)}
        </Price>
      </TotalPriceRow>
    </OrderItemsList>
  )
}

const OrderItemsList = styled(List, {

})

const OrderedItem = styled(ListItem, {

})

const Price = styled('span', {

})

const TotalPriceRow = styled(ListItem, {
  fontWeight: 'bold'
})
