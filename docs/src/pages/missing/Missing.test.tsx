import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { MissingPage } from './Missing.components';

test("Blank MissingPage", () => {
  render(<MissingPage />, {wrapper: BrowserRouter});
  expect(screen.getByText("Missing Page")).toBeInTheDocument();
});