import React, {useState} from 'react';
import TransactionItem from './TransactionItem';
import { Box, Typography, CircularProgress } from "@mui/material";
import transactionsMock from 'mockData/Transactions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const Transactions = () => {
    const [transactionList, setTransactionList] = useState(transactionsMock)
  
  // Check if transactions is undefined or null
  if (!transactionList) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  // Check if transactions is an empty array
  if (transactionList.length === 0) {
    return (
      <Box>
        <Typography>No transactions available.</Typography>
      </Box>
    );
  }

  // Group transactions by date
  const groupedTransactions = transactionList.reduce((groups, transaction) => {
    const date = transaction.valueDate;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  
    return (
        <Box style={{
            margin: "20px",
        }}>
            <Typography variant="h5">History</Typography>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 370,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 500,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
                <li key={`${date}`}>
                    <ul>
                    <ListSubheader style={{
                        backgroundColor: "#F6F6F6"
                    }}>
                        {`${date}`}
                    </ListSubheader>
                        {dateTransactions.map((transaction, index) => (
                            <TransactionItem
                            key={transaction.id}
                            description={transaction.description || "Credit"}
                            isDebit={transaction.dcInd? true : false}
                            amount={transaction.transactionAmount.amount}
                            currency={transaction.transactionAmount.currency}
                            />
                        ))}
                    </ul>
                </li>
                ))}
            </List>
        </Box>
    );
  }

export default Transactions;