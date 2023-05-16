import { styled } from "@stitches/react"
import * as Form from "@radix-ui/react-form"
import { getStep } from "../utils"
import { StepContent } from "./shared"
import { Order } from "../../types"
import { Input } from "../../components"
import { UseFormRegisterReturn, useFormContext } from "react-hook-form"
import { ForwardedRef, forwardRef } from "react"

type FieldName = keyof Order['deliveryDetails']

export const DeliveryDetailsSteps = () => {
  const { register } = useFormContext<Order>()

  return (
    <StepContent value={getStep('delivery-details')}>
      <FormRoot>
        <FormInput
          fieldName="firstName"
          label="First name"
          {...register('deliveryDetails.firstName')}
        />
        <FormInput
          fieldName="lastName"
          label="Last name"
          {...register('deliveryDetails.lastName')}
        />
        <FormInput
          fieldName="email"
          label="Email"
          {...register('deliveryDetails.email')}
        />
        <FormInput
          fieldName="city"
          label="City"
          {...register('deliveryDetails.city')}
        />
        <FormInput
          fieldName="street"
          label="Street"
          {...register('deliveryDetails.street')}
        />
        <FormInput
          fieldName="houseNumber"
          label="House number"
          {...register('deliveryDetails.houseNumber')}
        />
        {/* TODO: purchase proof and tax id*/}
      </FormRoot>
    </StepContent>
  )
}

interface FieldProps<T extends FieldName> extends UseFormRegisterReturn<`deliveryDetails.${T}`> {
  fieldName: T
  label: string
}

const FormInputComponent = <T extends FieldName> ({ fieldName, label, ...inputProps }: FieldProps<T>, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <FormField name={fieldName}>
      <FormLabel>{label}</FormLabel>
      <Form.Control asChild>
        <Input {...inputProps} ref={ref} />
      </Form.Control>
    </FormField>
  )
}

const FormInput = forwardRef(FormInputComponent)

const FormRoot = styled(Form.Root, {
  margin: '0 auto',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 24
})

const FormField = styled(Form.Field, {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8
})

const FormLabel = styled(Form.Label, {

})
