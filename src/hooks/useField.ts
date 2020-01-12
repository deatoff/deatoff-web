import { useState } from "react";
// https://d-toybox.com/studio/lib/input_event_viewer.html
type useFieldParams = {
  readonly initialValue: string;
};

export const useField = ({ initialValue }: useFieldParams) => {
  const [value, setStateValue] = useState(initialValue);

  const setValue = (v: string) => setStateValue(v);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return {
    value,
    setValue,
    onChangeInput
  };
};
