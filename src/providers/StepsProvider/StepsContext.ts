import { createContext, useContext } from "react"

export const steps = ['pizza', 'extras', 'delivery-details', 'summary'] as const

export type Step = typeof steps[number]
export type StepHistory = [Step, Step]

export type AnimationDirection = 'leftToRight' | 'rightToLeft'

interface Context {
  currentStep: Step
  previousStep: Step
  nextStep?: () => void
  stepBack?: () => void // TODO: rename to stepBack
  animationDirection: AnimationDirection
}

export const StepsContext = createContext<Context>({
  currentStep: steps[0],
  previousStep: steps[0],
  nextStep: () => null,
  stepBack: () => null,
  animationDirection: 'leftToRight'
})

export const useSteps = () => useContext(StepsContext)
