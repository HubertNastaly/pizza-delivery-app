import * as Tabs from '@radix-ui/react-tabs';
import { Step, useSteps } from '../../../providers/StepsProvider';
import { ReactNode } from 'react';
import { keyframes, styled } from '../../../theme';

const ANIMATION_DURATION = 300

const slideInLeftToRight = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
})

const slideInRightToLeft = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
})

const slideOutLeftToRight = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateX(100%)'
  }
})

const slideOutRightToLeft = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateX(-100%)'
  }
})

interface Props {
  stepName: Step
  children: ReactNode
  className?: string
}

export const StepContent = ({ stepName, children, className }: Props) => {
  const { animationDirection, currentStep } = useSteps()
  const animationType = stepName === currentStep ? 'slideIn' : 'slideOut'
  
  return (
    <TabsContent className={className} value={stepName} animationDirection={animationDirection} animationType={animationType}>
      {children}
    </TabsContent>
  )
}

const TabsContent = styled(Tabs.Content, {
  width: '100%',
  minHeight: 640,
  padding: '32px 0 64px 0',

  animationDuration: `${ANIMATION_DURATION}ms`,

  variants: {
    animationDirection: {
      leftToRight: {},
      rightToLeft: {}
    },
    animationType: {
      slideIn: {},
      slideOut: {}
    },
  },

  compoundVariants: [
    {
      animationType: 'slideIn',
      animationDirection: 'leftToRight',
      css: {
        animationName: `${slideInLeftToRight}`
      }
    },
    {
      animationType: 'slideIn',
      animationDirection: 'rightToLeft',
      css: {
        animationName: `${slideInRightToLeft}`
      }
    },
    {
      animationType: 'slideOut',
      animationDirection: 'leftToRight',
      css: {
        position: 'absolute',
        animationName: `${slideOutLeftToRight}`
      }
    },
    {
      animationType: 'slideOut',
      animationDirection: 'rightToLeft',
      css: {
        position: 'absolute',
        animationName: `${slideOutRightToLeft}`
      }
    }
  ]
})
