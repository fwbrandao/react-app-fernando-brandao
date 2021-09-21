import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './searchBar';

test('renders SearchBar', () => {
  render(<SearchBar />);
  // expect().toBeInTheDocument();
});