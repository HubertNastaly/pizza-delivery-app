import { createContext, useContext } from "react"
import { MenuItem } from "../../types"

interface Context {
  addMenuItem: (item: MenuItem) => void
  removeMenuItem: (item: MenuItem) => void
}

export const OrderContext = createContext<Context>({
  addMenuItem: () => null,
  removeMenuItem: () => null
})

export const useOrder = () => useContext(OrderContext)
