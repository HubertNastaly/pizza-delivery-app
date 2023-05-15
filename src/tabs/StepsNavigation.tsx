import { styled } from "@stitches/react"
import { useSteps } from "../providers/StepsProvider"
import { Button } from "../components"

export const StepsNavigation = () => {
  const { nextStep, previousStep } = useSteps()

  return (
    <Container firstStep={!previousStep}>
      {previousStep && <Button onClick={previousStep}>Back</Button>}
      {nextStep && <Button onClick={nextStep}>Next</Button>}
    </Container>
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
