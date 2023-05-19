import { useFormContext } from "react-hook-form"
import { List, ListItem } from "../../../components"
import { DeliveryDetails as DeliveryDetailsType, Order } from "../../../types"
import { formatLabel } from "../../../utils/formatLabel"
import { styled } from "../../../theme"

export const DeliveryDetails = () => {
  const { getValues } = useFormContext<Order>()
  const deliveryDetails = getValues('deliveryDetails')

  const fieldNames = Object.keys(deliveryDetails) as (keyof DeliveryDetailsType)[]

  return (
    <DeliveryDetailsList>
      {fieldNames.map((fieldName) => (
        <DeliveryDetail key={fieldName}>
          <Label>{formatLabel(fieldName)}</Label>
          <Info>{deliveryDetails[fieldName]}</Info>
        </DeliveryDetail>
      ))}
    </DeliveryDetailsList>
  )
}

const DeliveryDetailsList = styled(List, {

})

const DeliveryDetail = styled(ListItem, {

})

const Label = styled('span', {

})

const Info = styled('span', {

})
