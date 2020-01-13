import React from "react";
import { Home } from "./Home";

const pieces = [
  { id: "foo_xy4SGQF1", title: "foo", author: "foo-" },
  { id: "bar_nz5SOQE2", title: "bar", author: "bar-" }
];

export const HomeContainer: React.ComponentType<{}> = (_props: any) => {
  return <Home pieces={pieces} />;
};
