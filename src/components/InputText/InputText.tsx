import React from "react"
import css from "./styles.scss";

export type Props = { 
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  showLabel?: boolean;
  required?: boolean;
}

export const InputText: React.ComponentType<Props> = ({
  name,
  showLabel = true,
  value,
  onChange,
  hasError = false,
  required
}) => {
  return (
    <>
      {
        showLabel ? 
        (<label 
          className={hasError ? css.ErrorLabel : css.Label}
          htmlFor={name}>
            { required ? (<i>*</i>) : undefined } {name}
          </label>) :
        undefined
      }
      <input 
        id={name}
        className={hasError ? css.ErrorInput : css.Input}
        type="text" 
        onChange={onChange} 
        value={value} 
      />
      { hasError? (<span className={css.ErrorLabel}>error</span>): undefined }
    </>
  )
}