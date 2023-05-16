import { styled } from "@stitches/react"
import * as Form from "@radix-ui/react-form"
import { getStep } from "../utils"
import { StepContent } from "./shared"
import { Order } from "../../types"
import { Input } from "../../components"
import { UseFormRegisterReturn, useFormContext } from "react-hook-form"
import { ForwardedRef, forwardRef } from "react"
import { red } from "@radix-ui/colors"
import { formatLabel } from "../../utils/formatLabel"

type FieldName = keyof Order['deliveryDetails']

export const DeliveryDetailsSteps = () => {
  const { register } = useFormContext<Order>()

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
        {/* TODO: purchase proof and tax id*/}
      </FormRoot>
    </StepContent>
  )
}

interface FieldProps<T extends FieldName> extends UseFormRegisterReturn<`deliveryDetails.${T}`> {
  fieldName: T
}

const FormInputComponent = <T extends FieldName> ({ fieldName, ...inputProps }: FieldProps<T>, ref: ForwardedRef<HTMLInputElement>) => {
  const { formState: { errors } } = useFormContext<Order>()
  const error = errors['deliveryDetails']?.[fieldName]

  return (
    <FormField name={fieldName}>
      <InputTopLine>
        <FormLabel>{formatLabel(fieldName)}</FormLabel>
        {error && (
          <FormError>{error.message}</FormError>
        )}
      </InputTopLine>
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

const FormError = styled(Form.Message, {
  color: red.red11
})

const InputTopLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})
