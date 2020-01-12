import { List, Card } from "../../../components"
import { UpdateButton } from "./UpdateButton"

type Experience = {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly remixed: boolean;
}

export type Props = {
  readonly experiences: readonly Experience[]
}
export const ExperiencesList = ({
  experiences
}: Props) => {
  return (
    <List>
      <>
        { experiences.map(
            experience => (
              <li key={experience.id}>
                <Card 
                  primary={experience.title} 
                  secondary={experience.author}
                />
                <br />
                <UpdateButton 
                  e={experience} 
                  text={JSON.stringify(experience.remixed)} 
                />
              </li>
            )
          )}
      </>
    </List>
  )
}