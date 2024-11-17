import './App.css'
import Convert from './components/Convert/Convert'
import { useEffect, useState } from 'react'
import type { CurrenciesResponse } from './types'

function App() {
  document.title = 'Currency Conversion';

  const API_KEY = import.meta.env.VITE_SECRET_CURRENCYBEACON_API_KEY;
  const CURRENCIES_BASE_API_URL = import.meta.env.VITE_CURRENCYBEACON_CURRENCIES_API_URL;

  const [currencies, setCurrencies] = useState<CurrenciesResponse[]>([]);

  const fetchCurrencies = async() => {
    if (!API_KEY || !CURRENCIES_BASE_API_URL) {
      console.error('API key or Base URL is missing');
      return;
    }

    const CURRENCIES_API_URL = `${CURRENCIES_BASE_API_URL}?api_key=${API_KEY}`;

    try {
      const response = await fetch(CURRENCIES_API_URL)
      const data = await response.json()

      setCurrencies(data.response);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCurrencies()
  }, []);

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-p-4">
      <h1 className="tw-text-3xl tw-font-bold">Currency Conversion</h1>

      <div className="tw-mt-10 tw-w-full tw-max-w-xl">
        <Convert currencies={currencies} />
      </div>
    </div>
  )
}

export default App
