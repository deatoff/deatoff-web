import React from "react"

type Props = { 
  onChange: (e: React.SyntheticEvent) => void;
  value: string;
}

export const InputText: React.ComponentType<Props> = (props: Props) => 
  <input type="text" onChange={props.onChange} value={props.value} />