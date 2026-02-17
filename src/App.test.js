import { render, screen } from '@testing-library/react';
import App from './App';

test('renders professional profile header', () => {
  render(<App />);
  const headings = screen.getAllByText(/SM Nazim Uddin Shoikot/i);
  expect(headings.length).toBeGreaterThan(0);
});
