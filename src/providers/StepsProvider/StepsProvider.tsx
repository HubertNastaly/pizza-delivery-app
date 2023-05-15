import { ReactNode, useState } from "react"
import { StepsContext, steps } from "."

interface Props {
  children: ReactNode
}

export const StepsProvider = ({ children }: Props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const isLast = currentStepIndex === steps.length - 1
  const nextStep = isLast ? undefined : () => setCurrentStepIndex(index => index + 1)

  const isFirst = currentStepIndex === 0
  const previousStep = isFirst ? undefined : () => setCurrentStepIndex(index => index - 1)

  const currentStep = steps[currentStepIndex]

  return (
    <StepsContext.Provider value={{ currentStep, nextStep, previousStep }}>
      {children}
    </StepsContext.Provider>
  )
}
