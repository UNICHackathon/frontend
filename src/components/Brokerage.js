import React from 'react';
import {Card, CardContent, Typography, Box, Button} from '@mui/material';

function Brokerage({ transactions }) {
  return (
    <Card
      sx={{
        mt: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography component="div">
          Brokerage account
        </Typography>
      </CardContent>
      <CardContent sx={{ px: 3, py: 0 }}>
        <Typography component="div">
          $0.00
        </Typography>
      </CardContent>
      <CardContent sx={{ p: 3 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Open now
        </Button>
      </CardContent>
    </Card>
  );
}

export default Brokerage;
