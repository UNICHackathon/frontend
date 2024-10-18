import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import Layout from '@components/Layout';

function Home() {
  return (
    <Layout>
      <Box display="flex">
        <Box flex={1}>
          <nav>
            <Button variant="contained" color="primary" href="/income" sx={{ marginRight: 1 }}>
              Income
            </Button>
            <Button variant="contained" color="primary" href="/spending">
              Spending
            </Button>
          </nav>
        </Box>
        <Box width="30%">
          <Typography variant="h4">My Transactions</Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
