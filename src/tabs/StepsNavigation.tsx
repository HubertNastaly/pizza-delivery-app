import { useSteps } from "../providers/StepsProvider"
import { Button } from "../components"
import { useFormContext } from "react-hook-form"
import { Order } from "../types"
import { styled } from "../theme"

export const StepsNavigation = () => {
  const { nextStep, stepBack } = useSteps()
  const { watch } = useFormContext<Order>()

  const items = watch('items')

  return (
    <Container firstStep={!stepBack}>
      {stepBack && <Button onClick={stepBack}>Back</Button>}
      {nextStep ? (
        <Button onClick={nextStep} disabled={items.length === 0}>Next</Button>
      ) : (
        <ConfirmButton />
      )}
    </Container>
  )
}

const ConfirmButton = () => {
  const { handleSubmit } = useFormContext()

  const submit = handleSubmit(async (order) => {
    console.log('Submitted!', order)
  })

  return (
    <Button onClick={submit} view="filled">Confirm</Button>
  )
}

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  variants: {
    firstStep: {
      true: {
        justifyContent: 'flex-end'
      }
    }
  }
})
