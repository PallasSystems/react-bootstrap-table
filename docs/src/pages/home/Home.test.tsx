import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HomePage } from './Home.components';

test('Blank HomePage', () => {
  render(<HomePage />, { wrapper: BrowserRouter });
});
