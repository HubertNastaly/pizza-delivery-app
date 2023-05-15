import * as Tabs from '@radix-ui/react-tabs';
import { StepTabs } from './steps';
import { PageContent } from './components';

export const App = () => {
  return (
    <PageContent>
      <Tabs.Root>
        <StepTabs />
      </Tabs.Root>
    </PageContent>
  )
}