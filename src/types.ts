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

export interface Order {
  items: { type: MenuItem, quantity: number }[]
}
