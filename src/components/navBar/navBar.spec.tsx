import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import NavBar from './navBar';

let documentBody: RenderResult;

describe('<NavBar />', () => {
  beforeEach(() => {
    documentBody = render(<NavBar />);
  });

  it('should have a title', () => {
    expect(documentBody.getByText('DeFi Transactions Dashboard')).toBeInTheDocument();
  });
});