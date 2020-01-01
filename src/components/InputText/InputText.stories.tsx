import React from 'react';
import { InputText } from './InputText';

export default {
  component: InputText,
  title: 'InputText',
};

const onChange = (e: React.SyntheticEvent) => console.log(e)

export const text = () => (
  <InputText value="storybook" onChange={onChange} />
);