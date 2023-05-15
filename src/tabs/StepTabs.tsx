import * as Tabs from '@radix-ui/react-tabs';
import { orange, mauve } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import { toTabName } from './utils';
import { steps, useSteps } from '../providers/StepsProvider';

export const StepTabs = () => {
  const { currentStep } = useSteps()

  return (
    <TabsList>
      {steps.map((step, index) => (
        <TabsTrigger key={`tab-${step}`} value={step} disabled={step !== currentStep}>
          {`${index + 1} ${toTabName(step)}`}
        </TabsTrigger>
      ))}
    </TabsList>
  )
}

const TabsList = styled(Tabs.List, {
  display: 'flex',
  borderBottom: `1px solid ${mauve.mauve6}`,
})

const TabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  lineHeight: 1,
  color: mauve.mauve11,
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&[data-state="active"]': {
    color: orange.orange11,
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${orange.orange11}` },
});

