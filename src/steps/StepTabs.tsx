import * as Tabs from '@radix-ui/react-tabs';
import { orange, mauve } from '@radix-ui/colors';
import { styled } from '@stitches/react';

const steps = ['pizza', 'extras', 'discounts', 'delivery-details', 'summary'] as const

export const StepTabs = () => {
  return (
    <TabsList>
      {steps.map((step, index) => (
        <TabsTrigger key={`tab-${step}`} value={step}>
          {`${index + 1} ${toTabName(step)}`}
        </TabsTrigger>
      ))}
    </TabsList>
  )
}

function toTabName(stepName: typeof steps[number]) {
  const upperCasedName = stepName[0].toUpperCase() + stepName.slice(1)
  return upperCasedName.replace('-', ' ')
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
  '&:hover': { color: orange.orange11 },
  '&[data-state="active"]': {
    color: orange.orange11,
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${orange.orange11}` },
});

