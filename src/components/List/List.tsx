import React from 'react';
import css from "./styles.scss";

export type Props = { 
  children: React.ReactChild
}

export const List = ({
  children
}: Props) => (
  <ul className={css.List}>
    {children}
  </ul>
)