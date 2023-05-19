import * as Tabs from '@radix-ui/react-tabs';
import { toTabName } from './utils';
import { steps, useSteps } from '../providers/StepsProvider';
import { styled } from '../theme';

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
  borderBottom: `1px solid $disabled`,
})

const TabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: '$white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$regular',
  lineHeight: 1,
  color: '$disabled',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&[data-state="active"]': {
    color: '$primary',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px $primary` },
});

