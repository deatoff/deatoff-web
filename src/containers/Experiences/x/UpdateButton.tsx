import { useMutation } from "../../hooks"
import { Button } from "../../components"

type Props = {
  e: {
    id: string,
    title: string,
    author: string,
    remixed: boolean
  }
  text: string
};
export const UpdateButton: React.ComponentType<Props> = ({ 
  e,
  text,
}) => {
  const {
    id, 
    title,
    author,
    remixed
  } = e
  const { load, loading } = useMutation(`
  mutation {
    updateExperience(id: "${id}", title: "${title}", author: "${author}" remixed: ${!remixed}) {
      id
      title
      author
      remixed
    }
  }
  `)
  return (
    <Button loading={loading} size="small" text={text} onClick={load} />
  )
};