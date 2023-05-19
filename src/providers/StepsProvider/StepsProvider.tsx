import { ReactNode, useCallback, useState } from "react"
import { AnimationDirection, StepsContext, steps } from "./StepsContext"
import { useFormContext } from "react-hook-form"
import { Order } from "../../types"

interface Props {
  children: ReactNode
}

export const StepsProvider = ({ children }: Props) => {
  const [stepsIndicesHistory, setStepsIndicesHistory] = useState<[number, number]>([0, 0])
  const { trigger } = useFormContext<Order>()

  const pushStepIndex = useCallback((stepIndex: number) => {
    setStepsIndicesHistory(([latestStepIndex]) => [stepIndex, latestStepIndex])
  }, [setStepsIndicesHistory])

  const currentStepIndex = stepsIndicesHistory[0]
  const currentStep = steps[currentStepIndex]
  const previousStep = steps[stepsIndicesHistory[1]]

  const isLast = currentStepIndex === steps.length - 1
  const nextStep = isLast ? undefined : async () => {
    const validationTarget: keyof Order = currentStep === 'pizza' || currentStep === 'extras' ? 'items' : 'deliveryDetails'
    const isValid = await trigger(validationTarget)

    if(isValid) {
      pushStepIndex(currentStepIndex + 1)
    }
  }

  const isFirst = currentStepIndex === 0
  const stepBack = isFirst ? undefined : () => pushStepIndex(currentStepIndex - 1)

  const animationDirection: AnimationDirection = stepsIndicesHistory[0] < stepsIndicesHistory[1] ? 'leftToRight' : 'rightToLeft'

  return (
    <StepsContext.Provider value={{ currentStep, nextStep, stepBack, previousStep, animationDirection }}>
      {children}
    </StepsContext.Provider>
  )
}
