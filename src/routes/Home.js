import React from 'react';
import { Box, Typography, List, ListItem, Link } from '@mui/material';

function Home() {
  return (
    <Box display="flex">
      <Box flex={1}>
        <Typography variant="h4">Home</Typography>
        <nav>
          <List>
            <ListItem>
              <Link href="/income">Income</Link>
            </ListItem>
            <ListItem>
              <Link href="/spending">Spending</Link>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box width="30%">
        <Typography variant="h4">My Transactions</Typography>
      </Box>
    </Box>
  );
}

export default Home;
