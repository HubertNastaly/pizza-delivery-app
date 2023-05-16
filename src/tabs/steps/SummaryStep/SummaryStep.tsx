import { StepContent } from "../shared"
import { getStep } from "../../utils"
import { styled } from "@stitches/react"
import { OrderDetails } from "./OrderDetails"

export const SummaryStep = () => {
  return (
    <Columns value={getStep('summary')}>
      <OrderDetails />
    </Columns>
  )
}

const Columns = styled(StepContent, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 16
})
