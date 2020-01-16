import React from "react";
import styled from "styled-components";

type Props = {
  readonly className?: string;
};

const Component: React.ComponentType<Props> = ({ className }: Props) => (
  <div className={className}>
    <form action="">
      <input type="text" placeholder="id" />
      <input type="submit" value="sign in" />
    </form>
  </div>
);

export const SignIn = styled(Component)`
  input {
    color: red;
  }
`;
