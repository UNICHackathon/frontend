import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import MiniTransactionList from './MiniTransactionList';
import Transactions from './Transactions';

function History({ transactions }) {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6">
          History
        </Typography>
      </CardContent>
      <CardContent sx={{p:3}}>
        <MiniTransactionList />
      </CardContent>
    </Card>
  );
}

export default History;
