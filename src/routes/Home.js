/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Layout from '@components/Layout';
import Balance from "@components/Balance";
import { Box, Typography, Button, Container } from '@mui/material';
import Transactions from "@components/Transactions"


function Home() {
  return (
    <Layout>
      <Box display="flex">
        <Container>
          <Typography variant="h4">Good morning, John!</Typography> 
          <nav css={css`
            margin-top: 1rem;
            display: flex;
            gap: 1rem;
          `}>
            <Button variant="contained" color="primary" href="/income">
              Income
            </Button>
            <Button variant="contained" color="primary" href="/spending">
              Spending
            </Button>
          </nav>
          <Box sx={{ mt: 2 }}>
            <Balance
              balance={25000}
            />
          </Box>
        </Container>
        <Box width="30%">
          <Typography variant="h5">My Transactions</Typography>
        </Box>
      </Box>
      <Transactions />
    </Layout>
  );
}

export default Home;
