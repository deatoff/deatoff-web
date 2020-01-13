import React from "react";
import { useMutation } from "./useMutation";

type State<T> = T;
type Action<T> = {
  readonly type: string;
  // #TODO: We're researching the payload type
  readonly payload?: any;
};

const reducerFunc = <T>(_: void) => (state: State<T>, action: Action<T>) => {
  // eslint-disable-next-line functional/no-conditional-statement
  switch (action.type) {
    case "FILL":
    case "RESET":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const useForm = <T>({
  initialValues,
  query
}: {
  readonly initialValues: T;
  readonly query: string;
}) => {
  const initialState = initialValues;
  const reducer = reducerFunc<T>();
  const [values, dispatch] = React.useReducer(reducer, initialState);

  const { load } = useMutation<any, T>({
    variables: { ...((values as unknown) as object) },
    query
  });

  const handleSubmit = (_: void) => {
    // eslint-disable-next-line functional/no-expression-statement
    load();
    // eslint-disable-next-line functional/no-expression-statement
    dispatch({ type: "RESET", payload: initialValues });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "FILL",
      payload: { [e.target.name]: e.target.value }
    });

  return {
    values,
    handleSubmit,
    handleChangeInput
  };
};
