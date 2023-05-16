export type Price = number

export interface MenuItem {
  id: string
  name: string
  price: Price
}

export interface Pizza extends MenuItem {
  ingredients: Ingredient[]
}

export type Ingredient = 'Tomato sauce' | 'Mozzarella' | 'Ham' | 'Mushrooms' | 'Peperoni' | 'Onion' | 'Pepper' | 'Olives' | 'Feta'

export type OrderItem = { type: MenuItem, quantity: number }

export const purchaseProofOptions = ['invoice', 'receipt'] as const

export interface DeliveryDetails {
  firstName: string
  lastName: string
  email: string
  city: string
  street: string
  houseNumber: number
  purchaseProof: typeof purchaseProofOptions[number]
  taxId?: string
}

export interface Order {
  items: OrderItem[]
  deliveryDetails: DeliveryDetails
}
