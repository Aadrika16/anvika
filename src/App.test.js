import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the jewellery storefront', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /colour in its finest form/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument();
});
