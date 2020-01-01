import React from 'react';

type Props = { 
  text: string;
}

export const Button = (props: Props) => 
  <button>{props.text}</button>