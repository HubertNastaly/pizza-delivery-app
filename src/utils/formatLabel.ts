import { DeliveryDetails } from "../types";

const LABELS: Record<keyof DeliveryDetails, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  city: 'City',
  street: 'Street',
  houseNumber: 'House number',
  purchaseProof: 'Purchase proof',
  taxId: 'Tax identification number'
}

export function formatLabel(deliveryDetailKey: keyof DeliveryDetails) {
  return LABELS[deliveryDetailKey]
}
