import { render, screen } from '@testing-library/react';
import { NothingFound } from './NothingFound';

test('renders learn react link', () => {
  render(<NothingFound />);
  const linkElement = screen.getByText(/Searched city not found./i);
  expect(linkElement).toBeInTheDocument();
});
