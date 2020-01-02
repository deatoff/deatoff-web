import React from 'react';
import css from "./styles.scss";

export type Props = { 
  text: string;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  text,
  onClick
}: Props) => (
  <div>
    <button 
      className={css.Button}
      onClick={onClick}>
      {text}
    </button>
  </div>
)