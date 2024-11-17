import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


interface Currency {
  short_code: string;
  name: string;
}

interface CurrencyInputProps {
  label: string;
  currencies: Currency[];
}

export default function CurrencyInput({ label, currencies }: CurrencyInputProps) {
  return (
    <FormControl className="tw-w-full">
      <div className="tw-flex tw-flex-row">
        <div className="tw-w-4/12">
          <InputLabel id={label}>{label}</InputLabel>
          <Select
            className="tw-w-full"
            labelId={label}
            label={label}
          >
            {currencies.map((currency) => (
            <MenuItem
              key={currency.short_code}
              value={currency.short_code}
            >{currency.name}</MenuItem>
            ))}
          </Select>
        </div>

        <div className="tw-w-8/12 tw-ml-2">
          <TextField
            className="tw-w-full"
            type="number"
            id="filled-basic"
            label="Amount"
          />
        </div>
      </div>
    </FormControl>
  );
}
