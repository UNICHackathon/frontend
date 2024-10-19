import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function ExpensesGraph() {
  return (
    <Card
      sx={{
        mt: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography component="div">
          Expenses
        </Typography>
      </CardContent>
      <CardContent sx={{ p: 3 }}>
        // Expenses graph goes here
      </CardContent>
    </Card>
  );
}

export default ExpensesGraph;
