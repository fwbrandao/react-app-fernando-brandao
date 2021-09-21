import React from 'react';
import { render } from '@testing-library/react';
import TransactionTable from './transactionsTable';

test('renders TransactionTable', () => {
  render(<TransactionTable />);
  // expect().toBeInTheDocument();
});