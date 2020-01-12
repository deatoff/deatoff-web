import { useQuery, useMutation } from "../../../hooks"
import { Props as ExperiencesListProps, ExperiencesList } from "./___ExperiencesList"

export const Experiences = () => {
  const { loading, data, errors } = useQuery<{experiences: ExperiencesListProps["experiences"]}>();
  const experiences = data?.experiences

  return (
    <div>
      {/* { loading ? (<p>loading...</p>) : undefined } */}
      { experiences ? (<ExperiencesList experiences={experiences} />) : undefined }
    </div>
  )
}