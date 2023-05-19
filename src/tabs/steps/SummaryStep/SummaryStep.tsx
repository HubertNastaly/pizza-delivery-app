import { StepContent } from "../shared"
import { styled } from "@stitches/react"
import { OrderDetails } from "./OrderDetails"
import { DeliveryDetails } from "./DeliveryDetails"

export const SummaryStep = () => {
  return (
    <Columns stepName="summary">
      <DeliveryDetails />
      <OrderDetails />
    </Columns>
  )
}

const Columns = styled(StepContent, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 128
})
