import React from "react";

type Props = {
  readonly className?: string;
};

export const SignIn: React.ComponentType<Props> = ({ className }: Props) => (
  <div className={className}>
    <form action="">
      <input type="text" placeholder="id" />
      <input type="submit" value="sign in" />
    </form>
  </div>
);
