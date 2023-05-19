import { ForwardedRef, forwardRef } from "react"
import { FieldProps, FormField, FormLabel } from "./shared"
import { Order } from "../../../types"
import { formatLabel } from "../../../utils/formatLabel"
import * as Form from "@radix-ui/react-form"
import * as Switch from "@radix-ui/react-switch"
import { styled } from "@stitches/react"
import { mauve, orange } from "@radix-ui/colors"
import { useFormContext } from "react-hook-form"

// type BooleanValueFieldName<T extends DeliveryDetailsFieldName> = ({ [T in DeliveryDetailsFieldName]: DeliveryDetails[T] extends boolean ? T : never })[T]
// TODO: infer type from DeliveryDetails type
type BooleanValueFieldName = 'invoice'

const FormSwitchComponent = ({ fieldName, ...inputProps }: FieldProps<BooleanValueFieldName>, ref: ForwardedRef<HTMLButtonElement>) => {
  const { watch, setValue } = useFormContext<Order>()
  const isChecked = watch(inputProps.name)

  return (
    <FormField name={fieldName} row>
      <FormLabel>{formatLabel(fieldName)}</FormLabel>
      <Form.Control asChild>
        <SwitchRoot {...inputProps} ref={ref} onClick={() => setValue(inputProps.name, !isChecked)}>
          <SwitchThumb />
        </SwitchRoot>
      </Form.Control>
    </FormField>
  )
}

export const FormSwitch = forwardRef(FormSwitchComponent)

const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 26,
  backgroundColor: mauve.mauve11,
  borderRadius: 9999,
  position: 'relative',
  '&[data-state="checked"]': { backgroundColor: orange.orange11 },
});

const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  borderRadius: 9999,
  transition: 'transform 0.1s',
  transform: 'translateX(3px)',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});
