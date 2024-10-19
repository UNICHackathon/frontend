import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

function Balance({ balance, onAddFunds }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      variant="filled"
    >
      <CardContent sx={{ p: 3 }}>
        <Typography component="div">
          Current balance
        </Typography>
        <Typography variant="h5" component="div">
          ${balance}
        </Typography>
        <Typography color="text.secondary">
          Deposit: $0.00
        </Typography>
      </CardContent>
      <Box sx={{ p: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onAddFunds}
          fullWidth
        >
          Add Funds
        </Button>
      </Box>
    </Card>
  );
}

export default Balance;
