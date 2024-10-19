import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, TextField, MenuItem, Button } from '@mui/material';

const currencies = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
];

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    // Dummy conversion logic
    const conversionRate = 0.85; // Example conversion rate from USD to EUR
    setResult(amount * conversionRate);
  };

  return (
    <Card
      sx={{
        mt: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography component="div">
          Convert currency
        </Typography>
      </CardContent>
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Amount"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
          <TextField
            select
            label="From"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="To"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleConvert}>
            Convert
          </Button>
          {result !== null && (
            <Typography variant="h6">
              Result: {result} {toCurrency}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CurrencyConverter;
