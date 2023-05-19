import { ReactNode, useState } from "react"
import { StepsContext, steps } from "."
import { useFormContext } from "react-hook-form"
import { Order } from "../../types"

interface Props {
  children: ReactNode
}

export const StepsProvider = ({ children }: Props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const { trigger } = useFormContext<Order>()

  const currentStep = steps[currentStepIndex]

  const isLast = currentStepIndex === steps.length - 1
  const nextStep = isLast ? undefined : async () => {
    const validationTarget: keyof Order = currentStep === 'pizza' || currentStep === 'extras' ? 'items' : 'deliveryDetails'
    const isValid = await trigger(validationTarget)

    if(isValid) {
      setCurrentStepIndex(index => index + 1)
    }
  }

  const isFirst = currentStepIndex === 0
  const previousStep = isFirst ? undefined : () => setCurrentStepIndex(index => index - 1)

  return (
    <StepsContext.Provider value={{ currentStep, nextStep, previousStep }}>
      {children}
    </StepsContext.Provider>
  )
}
