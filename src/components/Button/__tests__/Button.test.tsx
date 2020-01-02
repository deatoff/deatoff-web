import React from 'react';
/**
 * Type definitions not properly loaded from @testing-library/jest-dom
 * https://www.npmjs.com/package/@testing-library/jest-dom
 * 
 * https://github.com/testing-library/jest-dom/issues/45
 * https://github.com/testing-library/jest-dom/issues/45#issuecomment-491601260
 * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/37792
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  test('renders message', () => {
    const onClick = jest.fn();
    const text = 'message';
    
    const { getByText } = render(
      <Button text={text} onClick={onClick} />
    );
    expect(getByText('message')).toBeInTheDocument();
  });
});