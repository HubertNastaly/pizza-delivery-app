import * as Tabs from '@radix-ui/react-tabs';
import { StepTabs, Steps, StepsNavigation } from './tabs';
import { PageContent } from './components';
import { useSteps } from './providers/StepsProvider';

export const App = () => {
  const { currentStep } = useSteps()

  return (
    <PageContent>
      <Tabs.Root value={currentStep}>
        <StepTabs />
        <Steps />
        <StepsNavigation />
      </Tabs.Root>
    </PageContent>
  )
}