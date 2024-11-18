import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import type { Currency } from '../../types';
import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

interface CurrencyInputProps {
  label: string;
  currencies: Currency[];
  amount?: number | '';
  onCurrencyChange: (currency: string) => void;
  onAmountChange?: (amount: number) => void;
}

export default function CurrencyInput({ label, currencies, amount, onCurrencyChange, onAmountChange }: CurrencyInputProps) {
  const handleCurrencyChange = (event: SelectChangeEvent<string>) => {
    onCurrencyChange(event.target.value as string);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onAmountChange) {
      onAmountChange(Number(event.target.value));
    }
  };

  return (
    <FormControl className="tw-w-full">
      <div className="tw-flex tw-flex-row">
        <div className="tw-w-4/12">
          <InputLabel id={label}>{label}</InputLabel>
          <Select
            className="tw-w-full"
            defaultValue=''
            labelId={label}
            label={label}
            onChange={handleCurrencyChange}
            data-testid="currency-input__currency"
          >
            {currencies.length > 0 ? (
              currencies.map((currency) => (
                <MenuItem
                  key={`${label}-${currency.short_code}`}
                  value={currency.short_code}
                >
                  {currency.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No currencies available</MenuItem>
            )}
          </Select>
        </div>

        <div className="tw-w-8/12 tw-ml-2">
          <TextField
            value={amount}
            className="tw-w-full"
            type="number"
            id="filled-basic"
            label="Amount"
            onChange={handleAmountChange}
            data-testid="currency-input__amount"
          />
        </div>
      </div>
    </FormControl>
  );
}
