import { Experiences } from "./Experiences";
import { experiencesQuery, createExperienceQuery } from "./queries";
import { useQuery, useForm } from "../../hooks";

type Variables = {
  readonly skip: number;
  readonly limit: number;
};
export const ExperiencesContainer = () => {
  const initialValues = {
    title: "foo",
    author: "bar"
  };

  const { data } = useQuery<Variables, {}>({
    variables: {
      skip: 0,
      limit: 10
    },
    query: experiencesQuery
  });

  const { values, handleSubmit, handleChangeInput } = useForm({
    initialValues,
    query: createExperienceQuery
  });

  return (
    <Experiences
      // @ts-ignore
      experiences={data}
      values={values}
      onChangeInput={handleChangeInput}
      onSubmit={handleSubmit}
    />
  );
};
