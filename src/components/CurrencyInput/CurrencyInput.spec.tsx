import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CurrencyInput from './CurrencyInput';
import type { Currency } from '../../types';

const mockCurrencies: Currency[] = [
  { short_code: 'USD', name: 'United States Dollar'},
  { short_code: 'EUR', name: 'Euro'},
  { short_code: 'GBP', name: 'British Pound'},
];

describe('CurrencyInput Component', () => {
  it('should render correctly with given props', () => {
    const {container} =render(
      <CurrencyInput
        label="Currency"
        currencies={mockCurrencies}
        amount=""
        onCurrencyChange={vi.fn()}
        onAmountChange={vi.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
