import { MenuListItem, List } from "../../components"
import { EXTRAS } from "../../mockData"
import { getStep } from "../utils"
import { StepContent } from "./shared"

export const ExtrasStep = () => {
  return (
    <StepContent value={getStep('extras')}>
      <List>
        {EXTRAS.map(item => (
          <MenuListItem
            key={item.id}
            menuItem={item}
          />
        ))}
      </List>
    </StepContent>
  )
}
