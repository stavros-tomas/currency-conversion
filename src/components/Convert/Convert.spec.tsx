import { render, fireEvent, waitFor, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Convert from './Convert';
import type { Currency } from '../../types';

const mockCurrencies: Currency[] = [
  { short_code: 'USD', name: 'United States Dollar'},
  { short_code: 'EUR', name: 'Euro'},
  { short_code: 'GBP', name: 'British Pound'},
];

describe('Convert Component', () => {
  it('should render correctly with given props', () => {
    const { container } = render(
      <Convert currencies={mockCurrencies} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should fetch the rate for the selected currency pair', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          response: { value: 100 },
        }),
      })
    ) as jest.Mock;

    render(<Convert currencies={mockCurrencies} />);

    // Open the From currency dropdown and select USD
    const fromCurrencyInput = screen.getByTestId('from-currency-input');
    fireEvent.mouseDown(within(fromCurrencyInput).getByRole('combobox'));
    fireEvent.click(screen.getByText('United States Dollar'));

    // Open the To currency dropdown and select EUR
    const toCurrencyInput = screen.getByTestId('to-currency-input');
    fireEvent.mouseDown(within(toCurrencyInput).getByRole('combobox'));
    const toCurrencyListbox = screen.getByRole('listbox');
    fireEvent.click(within(toCurrencyListbox).getByText('Euro'));

    // Enter the amount
    const amountInput = screen.getByRole('spinbutton', { name: /Amount/i });
    fireEvent.change(amountInput, { target: { value: '100' } });

    // Click the Convert button
    fireEvent.click(screen.getByText('Convert'));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('https://api.currencybeacon.com/v1/convert')
      );
    });
  });

  // TODO: Add tests for how many times was called
  // TODO: Add tests with what parameters was called
  // TODO: Add tests for error handling
});
