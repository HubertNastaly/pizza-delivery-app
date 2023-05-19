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

export interface DeliveryDetails {
  firstName: string
  lastName: string
  email: string
  city: string
  street: string
  houseNumber: number
  invoice: boolean
  taxId?: string
}

export type DeliveryDetailsFieldName = keyof Order['deliveryDetails']

export interface Order {
  items: OrderItem[]
  deliveryDetails: DeliveryDetails
}
