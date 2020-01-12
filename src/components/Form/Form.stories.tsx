/* eslint-disable functional/no-expression-statement */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form } from './Form';
import { InputText } from "..";

export default {
  component: Form,
  title: 'Form',
};

export const withInput = () => (
  <Form 
    onSubmit={e => {
    e.preventDefault()
    action('onSubmit')
  }}
  >
    <>
      <InputText
        name="name"
        value="name"
        onChange={action("onChangeName")}
      />
      <InputText
        name="address"
        value="address"
        onChange={action("onChangeAddress")}
      />
    </>
  </Form>
);