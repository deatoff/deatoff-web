import React from "react";
import { Header } from "../containers/Header";

export const withLayout = (Component: React.ComponentType) => () => (
  <>
    <Header />
    <Component />
  </>
);
