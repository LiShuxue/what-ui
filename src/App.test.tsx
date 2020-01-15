import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render the app component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
