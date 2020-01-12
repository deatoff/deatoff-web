import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions";
import { InputText } from "./InputText";

export default {
  component: InputText,
  title: "InputText"
};

export const text = () => (
  <InputText
    name="foo"
    value="storybook"
    onChange={action("onChange")}
  />
);
