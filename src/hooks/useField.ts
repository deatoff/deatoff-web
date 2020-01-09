import { useState } from "react"
// https://d-toybox.com/studio/lib/input_event_viewer.html
type useFieldParams = {
  initialValue: string,
}

export const useField = ({ initialValue }: useFieldParams) => {
  const [value, setStateValue] = useState(initialValue)

  const setValue = (value: string) => {
    setStateValue(value)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => 
    setValue(e.target.value)

  return { 
    value, 
    setValue, 
    onChangeInput 
  }
}