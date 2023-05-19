import { MenuItem, Pizza } from "./types";

export const PIZZAS: Pizza[] = [
  {
    name: 'Margherita',
    price: 31,
    ingredients: ['Tomato sauce', 'Mozzarella']
  },
  {
    name: 'Capricciosa',
    price: 37,
    ingredients: ['Tomato sauce', 'Mozzarella', 'Mushrooms', 'Ham']
  },
  {
    name: 'Vegetariana',
    price: 37,
    ingredients: ['Tomato sauce', 'Mozzarella', 'Mushrooms', 'Olives', 'Onion', 'Pepper']
  },
  {
    name: 'Peperoni',
    price: 39,
    ingredients: ['Tomato sauce', 'Mozzarella', 'Peperoni']
  },
  {
    name: 'Olimpia',
    price: 41,
    ingredients: ['Tomato sauce', 'Mozzarella', 'Olives', 'Feta']
  }
].map((pizza, index) => ({ ...pizza, id: `pizza-${index}` } as Pizza))

export const EXTRAS: MenuItem[] = [
  {
    name: 'Olive oil',
    price: 3
  },
  {
    name: 'Garlic olive oil',
    price: 4
  },
  {
    name: 'Coca cola 0,3l',
    price: 8
  },
  {
    name: 'Water 0,2l',
    price: 5
  }
].map((item, index) => ({ ...item, id: `extra-${index}`}))
