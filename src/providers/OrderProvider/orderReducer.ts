import { MenuItem, Order } from "../../types";

interface AddMenuItem {
  type: 'addMenuItem',
  item: MenuItem
}

interface RemoveMenuItem {
  type: 'removeMenuItem',
  item: MenuItem
}

export type Action = AddMenuItem | RemoveMenuItem

export function orderReducer(state: Order, action: Action): Order {
  switch(action.type) {
    case 'addMenuItem':
      return addMenuItem(state, action)
    case 'removeMenuItem':
      return removeMenuItem(state, action)
  }
}

function addMenuItem (state: Order, action: AddMenuItem) {
  const items = [...state.items]
  const addedMenuItemIndex = items.findIndex(({ type }) => type.id === action.item.id)

  if(addedMenuItemIndex === -1) {
    return { ...state, items: [...items, { type: action.item, quantity: 1 }] }
  }

  const { type, quantity } = items[addedMenuItemIndex] 
  items[addedMenuItemIndex] = { type, quantity: quantity + 1 }

  return { ...state, items }
}

function removeMenuItem (state: Order, action: RemoveMenuItem) {
  const items = [...state.items]
  const removedMenuItemIndex = items.findIndex(({ type }) => type.id === action.item.id)

  if(removedMenuItemIndex === -1) {
    return { ...state }
  }

  const { type, quantity } = items[removedMenuItemIndex]
  if(quantity === 1) {
    items.splice(removedMenuItemIndex, 1)
  } else {
    items[removedMenuItemIndex] = { type, quantity: quantity - 1 }
  }

  return { ...state, items }
}
