import React from "react"

export type Props = { 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.ComponentType<Props> = ({
  value,
  onChange
}) => (
  <input 
    type="text" 
    onChange={onChange} 
    value={value} 
  />
)