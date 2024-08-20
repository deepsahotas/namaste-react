import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('Contact us component should be rendered', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
});
