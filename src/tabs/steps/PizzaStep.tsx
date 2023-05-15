
import { getStep } from '../utils';
import { PIZZAS } from '../../mockData';
import { MenuListItem } from '../../components/MenuListItem';
import { StepContent } from './StepContent';
import { List } from '../../components/List';

export const PizzaStep = () => {
  return (
    <StepContent value={getStep('pizza')}>
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
