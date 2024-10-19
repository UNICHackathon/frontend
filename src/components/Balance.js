import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Balance({ balance }) {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography component="div">
          Current balance
        </Typography>
        <Typography variant="h5" component="div">
          ${balance}
        </Typography>
        <Typography color="text.secondary">
          // list of credit cards
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Balance;
