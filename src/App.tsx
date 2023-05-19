import * as Tabs from '@radix-ui/react-tabs';
import { StepTabs, Steps, StepsNavigation } from './tabs';
import { PageContent } from './components';
import { useSteps } from './providers/StepsProvider';
import { styled } from './theme';

export const App = () => {
  const { currentStep } = useSteps()

  return (
    <PageContent>
      <TabsRoot value={currentStep}>
        <StepTabs />
        <Steps />
        <StepsNavigation />
      </TabsRoot>
    </PageContent>
  )
}

const TabsRoot = styled(Tabs.Root, {
  width: '100%'
})
