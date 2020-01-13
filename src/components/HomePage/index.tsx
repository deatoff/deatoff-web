import React from "react";
import css from "./styles.scss";
import { Button, ButtonProps } from "..";

type Props = {
  readonly onClick: ButtonProps["onClick"];
};

export const HomePage: React.ComponentType<Props> = ({ onClick }) => (
  <div className={css.HomePage}>
    <h1 data-shadow-text="Deatoff">Deatoff</h1>
    <Button text="Click" onClick={onClick} />
  </div>
);
