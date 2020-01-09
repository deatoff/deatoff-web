import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form } from './Form';
import { InputText } from '../../components';

export default {
  component: Form,
  title: 'Form',
};

export const withInput = () => (
  <Form 
    onSubmit={e => {
    e.preventDefault()
    action('onSubmit')()
  }}>
    <>
      <InputText value="name" onChange={action("onChangeName")} />
      <InputText value="address" onChange={action("onChangeAddress")} />
    </>
  </Form>
);