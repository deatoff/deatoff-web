import React from "react";
import styled from "styled-components";
import Link from "next/link";

export type Props = {
  readonly className?: string;
};
const Component: React.ComponentType<Props> = ({ className }: Props) => (
  <div className={className}>
    <div>Deatoff</div>
    <div>
      <Link href="/signin">
        <a>login</a>
      </Link>
    </div>
  </div>
);

export const Header = styled(Component)<Props>`
  box-sizing: border-box;
  padding-right: 15px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  /* position: fixed; */
  top: 0px;
  left: 0px;
  height: 70px;
  /* margin-bottom: 70px; */
  background-color: rgb(255, 255, 255);
  z-index: 100;
  padding-left: 0px;
  will-change: height;
  transition: height 0.2s ease 0s;
  border-bottom: 1px solid rgb(218, 218, 218);
`;
