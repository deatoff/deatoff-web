import { List, Card } from "../../components"
import { UpdateButton } from "./UpdateButton"

type Experience = {
  id: string;
  title: string;
  author: string;
  remixed: boolean;
}

export type Props = {
  experiences: Experience[]
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
          ) 
        }
      </>
    </List>
  )
}