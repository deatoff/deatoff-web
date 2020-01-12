import React from "react";
import css from "./styles.scss";

export type Props = {
  readonly name: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly hasError?: boolean;
  readonly showLabel?: boolean;
  readonly required?: boolean;
};

export const InputText = ({
  name,
  showLabel = true,
  value,
  onChange,
  hasError = false,
  required
}: Props) => {
  return (
    <>
      {showLabel ? (
        <label
          className={hasError ? css.ErrorLabel : css.Label}
          htmlFor={name}
        >
          {required ? <i>*</i> : undefined}
          {name}
        </label>
      ) : (
        undefined
      )}
      <input
        id={name}
        name={name}
        className={hasError ? css.ErrorInput : css.Input}
        type="text"
        onChange={onChange}
        value={value}
      />
      {hasError ? (
        <span className={css.ErrorLabel}>error</span>
      ) : (
        undefined
      )}
      <br />
    </>
  );
};
