import { useReducer } from "react";
import { useMutation } from "./useMutation";
import { pipe } from "../functions/pipe";

const reducerFunc = <T>() => (
  state: T,
  action: {
    readonly type: string;
    readonly payload: T;
  }
) =>
  action.type
    ? { ...state, [action.type]: action.payload }
    : state;

export const useForm = <T>({
  initialValues,
  query
}: {
  readonly initialValues: T;
  readonly query: string;
}) => {
  const initialState = initialValues;
  const reducer = reducerFunc();
  const [values, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { load } = useMutation<any, T>({
    variables: { ...(values as object) },
    query
  });

  const handleSubmit = pipe(
    (e: React.SyntheticEvent) =>
      e.preventDefault(),
    load
  );

  const handleChangeCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    dispatch({
      type: e.target.name,
      payload: e.target.checked
    });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    dispatch({
      type: e.target.name,
      payload: e.target.value
    });

  return {
    values,
    handleSubmit,
    handleChangeInput,
    handleChangeCheckBox
  };
};
