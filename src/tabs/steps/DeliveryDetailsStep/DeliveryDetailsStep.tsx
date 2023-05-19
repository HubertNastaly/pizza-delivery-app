import { styled } from "@stitches/react"
import * as Form from "@radix-ui/react-form"
import { getStep } from "../../utils"
import { StepContent } from "../shared"
import { Order } from "../../../types"
import { useFormContext } from "react-hook-form"
import { FormInput } from "./FormInput"
import { FormSwitch } from "./FormSwitch"

export const DeliveryDetailsStep = () => {
  const { register, watch } = useFormContext<Order>()
  const shouldShowTaxIdInput = watch('deliveryDetails.invoice')

  return (
    <StepContent value={getStep('delivery-details')}>
      <FormRoot>
        <FormInput
          fieldName="firstName"
          {...register('deliveryDetails.firstName')}
        />
        <FormInput
          fieldName="lastName"
          {...register('deliveryDetails.lastName')}
        />
        <FormInput
          fieldName="email"
          {...register('deliveryDetails.email')}
        />
        <FormInput
          fieldName="city"
          {...register('deliveryDetails.city')}
        />
        <FormInput
          fieldName="street"
          {...register('deliveryDetails.street')}
        />
        <FormInput
          fieldName="houseNumber"
          {...register('deliveryDetails.houseNumber')}
        />
        <FormSwitch
          fieldName="invoice"
          {...register('deliveryDetails.invoice', )}
        />
        {shouldShowTaxIdInput && (
          <FormInput
            fieldName="taxId"
            {...register('deliveryDetails.taxId')}
          />
        )}
      </FormRoot>
    </StepContent>
  )
}

const FormRoot = styled(Form.Root, {
  margin: '0 auto',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 24
})
