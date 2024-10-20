import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
} from '@mui/material';
import EastIcon from "@mui/icons-material/East";

const transactions = [
  {
    id: 1,
    logo: './logos/starbucks.png',
    placeName: 'Starbucks',
    date: '2023-10-01',
    amount: '$5.00',
  },
  {
    id: 2,
    logo: './logos/amazon.png',
    placeName: 'Amazon',
    date: '2023-10-02',
    amount: '$50.00',
  },
  {
    id: 3,
    logo: './logos/walmart.png',
    placeName: 'Walmart',
    date: '2023-10-03',
    amount: '$30.00',
  },
  {
    id: 4,
    logo: './logos/apple.png',
    placeName: 'Apple Store',
    date: '2023-10-04',
    amount: '$200.00',
  },
  {
    id: 5,
    logo: './logos/mcdonalds.png',
    placeName: 'McDonald\'s',
    date: '2023-10-05',
    amount: '$10.00',
  },
];

function History() {
  return (
    <Card>
      <CardContent sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography component="div">History</Typography>
        <Typography variant="strong" sx={{ display: 'flex', fontWeight: 700 }}>
          See all <EastIcon fontSize="small" sx={{ ml: 1 }} />
        </Typography>
      </CardContent>
      <CardContent sx={{ p: 3, py: 0 }}>
        <List sx={{ py: 0 }}>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id} sx={{ px: 0 }}>
              <ListItemAvatar>
                <Avatar src={transaction.logo} />
              </ListItemAvatar>
              <ListItemText
                primary={transaction.placeName}
                secondary={`${transaction.date} - ${transaction.amount}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default History;
