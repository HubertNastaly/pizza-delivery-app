
import { getStep } from '../utils';
import { PIZZAS } from '../../mockData';
import { MenuListItem } from '../../components/MenuListItem';
import { StepContent } from './StepContent';
import { List } from '../../components/List';

export const PizzaStep = () => {
  return (
    <StepContent value={getStep('pizza')}>
      <List>
        {PIZZAS.map(({ name, price, ingredients }) => (
          <MenuListItem
            key={`pizza-${name}`}
            name={name}
            price={price}
            description={ingredients.join(', ')}
            quantity={0}
            setQuantity={() => null}
          />
        ))}
      </List>
    </StepContent>
  )
}
