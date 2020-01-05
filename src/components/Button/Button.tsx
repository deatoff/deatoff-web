import React from 'react';
import css from "./styles.scss";

export type Props = { 
  size?: "large" | "small";
  loading?: boolean;
  text: string;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  size = "large",
  loading = false,
  text,
  onClick
}: Props) => (
  <div>
    <button 
      className={size === "large" ? css.Button : css.ButtonSmall}
      onClick={onClick}>
        {text} 
        <span className={css.ButtonLoading}>
          {loading ? "✈" : undefined}
        </span>
    </button>
  </div>
)