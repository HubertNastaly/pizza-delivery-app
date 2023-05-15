import * as Tabs from '@radix-ui/react-tabs';
import { StepTabs, Steps } from './tabs';
import { PageContent } from './components';
import { steps } from './tabs/utils';

export const App = () => {
  return (
    <PageContent>
      <Tabs.Root defaultValue={steps[0]}>
        <StepTabs />
        <Steps />
      </Tabs.Root>
    </PageContent>
  )
}