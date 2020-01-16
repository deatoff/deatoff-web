import React from "react";

/**
 * 
 * .TBD {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Title {
  padding-left: 33px;
  padding-right: 33px;
  font-size: 33px;
  font-weight: 300;
  line-height: 1.4125;
  margin-top: 25px;
  max-width: 550px;
  text-align: center;
  width: 100%;
}

.Description {
  color: #292929;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.67143;
  margin-top: 19px;
}
 */

export const TBD: React.ComponentType<{}> = _props => {
  return (
    <div className={"TBD"}>
      <h1 className={"Title"}>Deatoff</h1>
      <p className={"Description"}>
        We believe that everyone should have easy access to art made by
        interesting artists.
      </p>
    </div>
  );
};
