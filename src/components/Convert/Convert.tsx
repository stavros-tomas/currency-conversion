import { useState } from 'react';
import styles from './Convert.module.css';
import Button from '@mui/material/Button';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import type { Currency } from '../../types';

interface ConvertProps {
  currencies: Currency[];
}
interface CurrencyState {
  amount: number | '';
  currency: string | '';
}

export default function Convert({ currencies }: ConvertProps) {
  const [fromCurrency, setFromCurrency] = useState<CurrencyState>({ amount: '', currency: '' });
  const [toCurrency, setToCurrency] = useState<CurrencyState>({ amount: '', currency: '' });

  const fetchConvert = async() =>{
    const API_KEY = import.meta.env.VITE_SECRET_CURRENCYBEACON_API_KEY;
    const CONVERT_BASE_API_URL = import.meta.env.VITE_CURRENCYBEACON_CONVERT_API_URL;

    try {
      if (!API_KEY || !CONVERT_BASE_API_URL) {
        console.error('API key or Base URL is missing');
        return;
      }
      const CONVERT_API_URL = `${CONVERT_BASE_API_URL}?api_key=${API_KEY}&from=${fromCurrency.currency}&to=${toCurrency.currency}&amount=${fromCurrency.amount}`;
      const response = await fetch(CONVERT_API_URL);
      const data = await response.json();

      setToCurrency(() => {
        return {
          ...toCurrency,
          amount: data.response.value,
        };
      });
    } catch (error) {
      console.error('Error during conversion:', error);
    }
  }

  const handleFromCurrencyChange = (amount: CurrencyState['amount'] = '', currency: CurrencyState['currency']) => {
    setFromCurrency({ amount, currency });
  };

  const handleToCurrencyChange = (amount: CurrencyState['amount'] = '', currency: CurrencyState['currency']) => {
    setToCurrency({ amount, currency });
  };

  const handleConvert = async () => {
    fetchConvert();
  };

  return (
    <div className={styles.convertWrapper}>
      <div className="tw-mt-4 tw-w-full">
        <CurrencyInput
          label={'From'}
          currencies={currencies}
          onAmountChange={(amount) => handleFromCurrencyChange(amount, fromCurrency.currency)}
          onCurrencyChange={(currency) => handleFromCurrencyChange(fromCurrency.amount, currency)}
        />
      </div>

      <div className="tw-mt-6 tw-w-full">
        <CurrencyInput
          label={'To'}
          currencies={currencies}
          amount={toCurrency.amount}
          onCurrencyChange={(currency) => handleToCurrencyChange(toCurrency.amount, currency)}
        />
      </div>

      <div className="tw-w-full tw-mt-8">
        <Button
          className="tw-w-full"
          variant="contained"
          onClick={handleConvert}
        >
          Convert
        </Button>
      </div>
    </div>
  );
}
