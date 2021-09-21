import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './navBar';

test('renders navBar', () => {
  const { getByText } = render(<NavBar />);
  const titleElement = getByText("DeFi Transactions Dashboard");
  expect(titleElement).toBeInTheDocument();
});