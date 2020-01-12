import React from 'react';
import css from "./styles.scss";

export type Props = {
  readonly children: React.ReactChild
  // eslint-disable-next-line functional/no-mixed-type
  readonly onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  // eslint-disable-next-line functional/no-mixed-type
  readonly submitText?: string;
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