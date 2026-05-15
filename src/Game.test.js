import { render, screen } from '@testing-library/react';
import App from './Game';

test('renders Clubbage header', () => {
  render(<App />);
  const headerElement = screen.getByText("Clubbage!!");
  expect(headerElement).toBeInTheDocument();
});
