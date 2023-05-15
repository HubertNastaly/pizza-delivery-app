import * as Tabs from '@radix-ui/react-tabs';
import { StepTabs } from './tabs';
import { PageContent } from './components';
import { PizzaStep } from './tabs/steps';
import { steps } from './tabs/utils';

export const App = () => {
  return (
    <PageContent>
      <Tabs.Root defaultValue={steps[0]}>
        <StepTabs />
        <PizzaStep />
      </Tabs.Root>
    </PageContent>
  )
}