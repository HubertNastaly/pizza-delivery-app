
import { PIZZAS } from '../../mockData';
import { MenuListItem, List } from '../../components';
import { StepContent } from './shared';

export const PizzaStep = () => {
  return (
    <StepContent stepName="pizza">
      <List>
        {PIZZAS.map(pizza => (
          <MenuListItem
            key={pizza.id}
            menuItem={pizza}
            description={pizza.ingredients.join(', ')}
          />
        ))}
      </List>
    </StepContent>
  )
}
