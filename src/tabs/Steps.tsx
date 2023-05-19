import { styled } from "../theme";
import { PizzaStep, ExtrasStep, DeliveryDetailsStep, SummaryStep } from "./steps";

export const Steps = () => (
  <StepsContainer>
    <PizzaStep />
    <ExtrasStep />
    <DeliveryDetailsStep />
    <SummaryStep />
  </StepsContainer>
)

const StepsContainer = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'flex'
})
