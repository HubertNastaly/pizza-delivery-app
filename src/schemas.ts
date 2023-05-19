import * as yup from 'yup'
import { DeliveryDetails, Order, OrderItem } from './types'

const REQUIRED_MSG = 'Required field'
const DIGITS_REGEX = /^\d+$/
const LETTERS_REGEX = /^[a-zA-Z]+$/

const onlyLettersSchema = yup.string().required(REQUIRED_MSG).matches(LETTERS_REGEX, { message: 'Only letters' })

const deliveryDetailsSchema = new yup.ObjectSchema<DeliveryDetails>({
  firstName: onlyLettersSchema,
  lastName: onlyLettersSchema,
  email: yup.string().required(REQUIRED_MSG).email('Invalid email address'),
  city: onlyLettersSchema,
  street: yup.string().required(REQUIRED_MSG),
  houseNumber: yup.number().required(REQUIRED_MSG).typeError('Invalid number').integer().positive(),
  invoice: yup.boolean().required(REQUIRED_MSG),
  taxId: yup
    .string()
    .test('check-if-required', REQUIRED_MSG, (value, context) => context.parent.invoice ? !!value : true)
    .matches(DIGITS_REGEX, { message: 'Only digits' })
})

export const orderSchema = new yup.ObjectSchema<Order>({
  deliveryDetails: deliveryDetailsSchema,
  items: new yup.ArraySchema<OrderItem[], yup.AnyObject>().test('non-empty', 'Empty order', items => items.length > 0),
})
