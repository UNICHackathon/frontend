import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Balance() {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography component="div">
          Current balance
        </Typography>
        <Typography variant="h5" component="b">
          <b>€57,892.00</b>
        </Typography>
        <Typography color="text.secondary">
          
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Balance;
