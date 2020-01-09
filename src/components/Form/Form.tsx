import React from 'react';
import css from "./styles.scss";

export type Props = {
  children: React.ReactChild
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  submitText?: string;
}

export const Form = ({
  children,
  onSubmit,
  submitText = "Submit"
}: Props) => (
  <form 
    onSubmit={onSubmit}
  >
    <fieldset className={css.FieldSet}>
      <legend className={css.Legend}>
        Experiences Form
      </legend>
      {children}
      <input 
        type="submit" 
        value={submitText} 
        className={css.Submit}
      />
    </fieldset>
  </form>
)