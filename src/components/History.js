import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function History({ transactions }) {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography component="div">
          History
        </Typography>
      </CardContent>
      <CardContent sx={{ p: 3 }}>
        // Should show last 5 transactions
      </CardContent>
    </Card>
  );
}

export default History;
