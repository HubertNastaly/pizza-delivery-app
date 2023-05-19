import { ForwardedRef, forwardRef } from "react"
import * as Form from "@radix-ui/react-form"
import { useFormContext } from "react-hook-form"
import { styled } from "@stitches/react"
import { DeliveryDetailsFieldName, Order } from "../../../types"
import { formatLabel } from "../../../utils/formatLabel"
import { Input } from "../../../components"
import { red } from "@radix-ui/colors"
import { FieldProps, FormField, FormLabel } from "./shared"

const FormInputComponent = <T extends DeliveryDetailsFieldName> ({ fieldName, ...inputProps }: FieldProps<T>, ref: ForwardedRef<HTMLInputElement>) => {
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

export const FormInput = forwardRef(FormInputComponent)

const FormError = styled(Form.Message, {
  color: red.red11
})

const InputTopLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})
