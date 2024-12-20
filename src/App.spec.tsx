import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('should render the title', () => {
    render(<App />);
    const titleElement = screen.getByText('Currency Conversion');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render as expected', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  // TODO: Add tests that currencies fetch got called 1 upon initializationcalled
  // TODO: Add tests for error handling
});
