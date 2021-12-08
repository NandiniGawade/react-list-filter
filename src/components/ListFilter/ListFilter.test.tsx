import { render, screen } from '@testing-library/react';
import { ListFilter } from './ListFilter';

test('renders learn react link', () => {
  render(<ListFilter handleChangeInput={() => {}} />);
  const linkElement = screen.getByText(/Search City/i);
  expect(linkElement).toBeInTheDocument();
});
