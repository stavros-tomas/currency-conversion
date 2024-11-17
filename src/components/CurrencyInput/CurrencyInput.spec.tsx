import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CurrencyInput from './CurrencyInput';
import type { Currency } from '../../types';

const mockCurrencies: Currency[] = [
  { short_code: 'USD', name: 'United States Dollar', code: 'USD', decimal_mark: '.', id: 1, precision: 2, subunit: 100, symbol: '$', symbol_first: true, thousands_separator: ',' },
  { short_code: 'EUR', name: 'Euro', code: 'EUR', decimal_mark: ',', id: 2, precision: 2, subunit: 100, symbol: '€', symbol_first: true, thousands_separator: '.' },
  { short_code: 'GBP', name: 'British Pound', code: 'GBP', decimal_mark: '.', id: 3, precision: 2, subunit: 100, symbol: '£', symbol_first: true, thousands_separator: ',' },
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
