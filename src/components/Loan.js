import React from 'react';
import { Button, Card, CardContent, Typography, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';

function Loan() {
  const payments = [
    { number: 4, date: 'October 29', amount: '$1,553.53', bgColor: '#fed403' },
    { number: 5, date: 'November 29', amount: '$1,553.53' },
    { number: 6, date: 'December 29', amount: '$1,553.53' },
  ];

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent sx={{ p: 3, pb: 0 }}>
        <Typography component="div">
          Real estate loan
        </Typography>
        <Typography variant="h5" component="div">
          -$ 113,000.00
        </Typography>
        <Typography component="div" mt={1}>
          21 payments left
        </Typography>
      </CardContent>
      <CardContent sx={{ px: 3, py: 0 }}>
        <List>
          {payments.map((payment, index) => (
            <React.Fragment key={payment.number}>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: payment.bgColor, color: 'black' }}>{payment.number}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={payment.date}
                  secondary={payment.amount}
                />
                {index === 0 && (
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    sx={{ px: 2, py: .5 }}
                  >
                    Pay now
                  </Button>
                )}
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </CardContent>
      <CardContent sx={{ p: 3 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          See more
        </Button>
      </CardContent>
    </Card>
  );
}

export default Loan;
