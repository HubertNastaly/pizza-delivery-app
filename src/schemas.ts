import * as yup from 'yup'
import { DeliveryDetails, Order, OrderItem, purchaseProofOptions } from './types'

const REQUIRED_MSG = 'Required field'

const deliveryDetailsSchema = new yup.ObjectSchema<DeliveryDetails>({
  firstName: yup.string().required(REQUIRED_MSG),
  lastName: yup.string().required(REQUIRED_MSG),
  email: yup.string().required(REQUIRED_MSG).email('Invalid email address'),
  city: yup.string().required(REQUIRED_MSG),
  street: yup.string().required(REQUIRED_MSG),
  houseNumber: yup.number().required(REQUIRED_MSG).typeError('Invalid number').integer().positive(),
  purchaseProof: yup.string().required(REQUIRED_MSG).oneOf(purchaseProofOptions),
  taxId: yup.string().optional()
})

export const orderSchema = new yup.ObjectSchema<Order>({
  deliveryDetails: deliveryDetailsSchema,
  items: new yup.ArraySchema<OrderItem[], yup.AnyObject>,
})
