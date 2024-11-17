
import styles from './Convert.module.css';
import Button from '@mui/material/Button';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

export default function Convert() {
  const CURRENCIES = [
    { short_code: 'USD', name: 'USD name' },
    { short_code: 'EUR', name: 'EUR name' },
    { short_code: 'GBP', name: 'GBP name' },
  ];

  return (
    <div className={styles.convertWrapper}>
      <div className="tw-mt-4 tw-w-full">
        <CurrencyInput
          label={'From'}
          currencies={CURRENCIES}
        />
      </div>

      <div className="tw-mt-6 tw-w-full">
        <CurrencyInput
          label={'To'}
          currencies={CURRENCIES}
        />
      </div>

      <div className="tw-w-full tw-mt-8">
        <Button
          className="tw-w-full"
          variant="contained">Convert</Button>
      </div>
    </div>
  )
}
