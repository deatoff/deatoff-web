import React from 'react';
import { List } from './List';

export default {
  component: List,
  title: 'List',
};

const _items = [1, 2, 3]

export const items = () => (
  <List>
    <>
      {_items.map(i => (<li>i</li>))}
    </>
  </List>
);