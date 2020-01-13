import React from "react";
import style from "./TBD.styles.scss";

export const TBD: React.ComponentType<{}> = _props => {
  return (
    <div className={style.TBD}>
      <h1 className={style.Title}>Deatoff</h1>
      <p className={style.Description}>
        We believe that everyone should have easy access to art made by
        interesting artists.
      </p>
    </div>
  );
};
