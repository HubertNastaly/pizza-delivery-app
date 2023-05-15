import { ReactNode, useCallback, useReducer } from "react"
import { MenuItem } from "../../types"
import { orderReducer } from "./orderReducer"
import { DEFAULT_ORDER, OrderContext } from "./OrderContext"

interface Props {
  children: ReactNode
}

export const OrderProvider = ({ children }: Props) => {
  const [order, dispatch] = useReducer(orderReducer, DEFAULT_ORDER)

  const addMenuItem = useCallback((item: MenuItem ) => dispatch({ type: 'addMenuItem', item }), [])
  const removeMenuItem = useCallback((item: MenuItem ) => dispatch({ type: 'removeMenuItem', item }), [])

  return (
    <OrderContext.Provider value={{ order, addMenuItem, removeMenuItem }} >
      {children}
    </OrderContext.Provider>
  )
}
