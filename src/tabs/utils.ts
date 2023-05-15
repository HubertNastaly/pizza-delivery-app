export const steps = ['pizza', 'extras', 'discounts', 'delivery-details', 'summary'] as const

export type Step = typeof steps[number]

export const getStep = (step: Step) => step

export function toTabName(step: Step) {
  const upperCasedName = step[0].toUpperCase() + step.slice(1)
  return upperCasedName.replace('-', ' ')
}
