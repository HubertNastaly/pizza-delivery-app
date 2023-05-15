import { createContext, useContext } from "react"
import { MenuItem, Order } from "../../types"

export const DEFAULT_ORDER: Order = {
  items: []
}

interface Context {
  order: Order,
  addMenuItem: (item: MenuItem) => void
  removeMenuItem: (item: MenuItem) => void
}

export const OrderContext = createContext<Context>({
  order: DEFAULT_ORDER,
  addMenuItem: () => null,
  removeMenuItem: () => null
})

export const useOrder = () => useContext(OrderContext)
