import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const textElement = screen.getAllByText("Pallas Systems");
  // confirm each element is valid  
  textElement.forEach(function(value ) {
    expect(value).toBeValid();
  });
});
