import { styled } from "@stitches/react"
import * as Form from "@radix-ui/react-form"
import { DeliveryDetailsFieldName } from "../../../types"
import { UseFormRegisterReturn } from "react-hook-form"

export const FormField = styled(Form.Field, {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  variants: {
    row: {
      true: {
        flexDirection: 'row',
        alignItems: 'center'
      }
    }
  }
})

export const FormLabel = styled(Form.Label, {

})

export interface FieldProps<T extends DeliveryDetailsFieldName> extends UseFormRegisterReturn<`deliveryDetails.${T}`> {
  fieldName: T
}
