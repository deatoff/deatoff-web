import React from "react";
import styled from "styled-components";

const Component: React.ComponentType<{}> = _props => {
  return (
    <div>
      <h1>Deatoff</h1>
      <p>
        We believe that everyone should have easy access to art made by
        interesting artists.
      </p>
    </div>
  );
};

export const TBD = styled(Component)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
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
  p {
    color: #292929;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.67143;
    margin-top: 19px;
  }
`;
