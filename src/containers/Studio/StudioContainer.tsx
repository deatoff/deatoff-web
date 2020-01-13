import React from "react";
import { piecesQuery, createPieceQuery } from "./StudioQueries";
import { Props as StudioProps, Studio } from "./Studio";
import { useQuery, useForm } from "../../hooks";

const initialValues = {
  title: "",
  author: ""
};

type Data = {
  readonly userPieces: StudioProps["userPieces"];
};
type Variables = {
  readonly skip: number;
  readonly limit: number;
};

export const StudioContainer = (_props: any) => {
  // #TODO: How to prevent a rerender in container ?
  const { data } = useQuery<Variables, Data>({
    variables: { skip: 0, limit: 10 },
    query: piecesQuery
  });
  const { values, handleSubmit, handleChangeInput } = useForm({
    initialValues,
    query: createPieceQuery
  });

  const onSubmit = e => {
    // eslint-disable-next-line functional/no-expression-statement
    e.preventDefault();
    // eslint-disable-next-line functional/no-conditional-statement
    if (!values.title && !values.author) return;
    // eslint-disable-next-line functional/no-expression-statement
    handleSubmit();
  };

  return (
    <Studio
      onChangeInput={handleChangeInput}
      onSubmit={onSubmit}
      values={values}
      userPieces={data?.userPieces ?? []}
    />
  );
};
