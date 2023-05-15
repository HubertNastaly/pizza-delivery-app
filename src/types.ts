export type Price = number

export interface MenuItem {
  name: string
  price: Price
}

export interface Pizza extends MenuItem {
  ingredients: Ingredient[]
}

export type Ingredient = 'Tomato sauce' | 'Mozzarella' | 'Ham' | 'Mushrooms' | 'Peperoni' | 'Onion' | 'Pepper' | 'Olives' | 'Feta'
