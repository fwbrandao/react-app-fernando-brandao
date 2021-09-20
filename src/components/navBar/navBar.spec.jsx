import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../navbar';

test('renders navbar', () => {
  const { getByText } = render(<NavBar />);
  const titleElement = getByText("DeFi Transactions Dashboard");
  expect(titleElement).toBeInTheDocument();
});
