import { ReactNode, useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { MenuItem } from "../../types"
import { OrderContext } from "./OrderContext"
import { Order } from "../../types"
import { yupResolver } from '@hookform/resolvers/yup'
import { orderSchema } from "../../schemas"

const DEFAULT_STATE = {
  items: [],
}

interface Props {
  children: ReactNode
}

export const OrderProvider = ({ children }: Props) => {
  const formContext = useForm<Order>({
    resolver: yupResolver(orderSchema),
    mode: 'onChange',
    defaultValues: DEFAULT_STATE,
  })

  const { setValue, getValues } = formContext

  const addMenuItem = useCallback((addedItem: MenuItem) => {
    const items = getValues('items')
    const addedMenuItemIndex = items.findIndex(({ type }) => type.id === addedItem.id)

    if(addedMenuItemIndex === -1) {
      setValue('items', [...items, { type: addedItem, quantity: 1 }])
      return
    }

    const { type, quantity } = items[addedMenuItemIndex]
    items[addedMenuItemIndex] = { type, quantity: quantity + 1 }

    setValue('items', items)
  }, [setValue, getValues])

  const removeMenuItem = useCallback((removedItem: MenuItem) => {
    const items = getValues('items')
    const removedMenuItemIndex = items.findIndex(({ type }) => type.id === removedItem.id)

    if(removedMenuItemIndex === -1) {
      return
    }

    const { type, quantity } = items[removedMenuItemIndex]
    if(quantity === 1) {
      items.splice(removedMenuItemIndex, 1)
    } else {
      items[removedMenuItemIndex] = { type, quantity: quantity - 1 }
    }

    setValue('items', items)
  }, [setValue, getValues])

  return (
    <OrderContext.Provider value={{ addMenuItem, removeMenuItem }} >
      <FormProvider {...formContext}>
        {children}
      </FormProvider>
    </OrderContext.Provider>
  )
}
