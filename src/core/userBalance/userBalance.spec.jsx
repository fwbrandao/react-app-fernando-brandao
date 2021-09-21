import React from 'react';
import { render } from '@testing-library/react';
import UserBalance from './userBalance';

test('renders UserBalance', () => {
  render(<UserBalance />);
  // expect().toBeInTheDocument();
});