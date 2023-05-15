import { Step } from "../providers/StepsProvider"

export const getStep = (step: Step) => step

export function toTabName(step: Step) {
  const upperCasedName = step[0].toUpperCase() + step.slice(1)
  return upperCasedName.replace('-', ' ')
}
