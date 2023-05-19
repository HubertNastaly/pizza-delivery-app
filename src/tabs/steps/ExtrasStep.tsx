import { MenuListItem, List } from "../../components"
import { EXTRAS } from "../../mockData"
import { StepContent } from "./shared"

export const ExtrasStep = () => {
  return (
    <StepContent stepName="extras">
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
