import React from "react";

import Link from "next/link";
import styled from "styled-components";

export type Props = {
  readonly className?: string;
};

// https://www.booking-wp-plugin.com/how-to-design-an-effective-login-page-and-what-mistakes-to-avoid/
const Component: React.ComponentType<Props> = ({ className }: Props) => (
  <div className={className}>
    <p>Enjoy your favorite arts</p>
    <p>Sign in to access arts that you’ve liked or contact</p>
    <br />
    <Link href="/signin">
      <a>Login</a>
    </Link>
  </div>
);

export const CTA = styled(Component)<Props>`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`;
