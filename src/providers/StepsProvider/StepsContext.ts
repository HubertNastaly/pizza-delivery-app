import { createContext, useContext } from "react"

export const steps = ['pizza', 'extras', 'delivery-details', 'summary'] as const

export type Step = typeof steps[number]

interface Context {
  currentStep: Step
  nextStep?: () => void
  previousStep?: () => void
}

export const StepsContext = createContext<Context>({
  currentStep: steps[0],
  nextStep: () => null,
  previousStep: () => null
})

export const useSteps = () => useContext(StepsContext)
