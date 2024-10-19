/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Transactions from "@components/Transactions"
import { Box, Typography, Container, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Balance from '@components/Balance';
import History from '@components/History';
import Layout from '@components/Layout';
import CurrencyConverter from "@components/CurrencyConverter";
import ExpensesGraph from "@components/ExpensesGraph";

function Home() {
  return (
    <Layout>
      <Box display="flex" width="100%">
        <Box width="25%">
          <Balance balance={25000} />
        </Box>
        <Container sx={{ width: '50%' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              backgroundColor: 'white',  // White background
              borderRadius: '4px',       // Rounded corners if you want
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',        // No border outline
                },
                '&:hover fieldset': {
                  border: 'none',        // No outline on hover
                },
                '&.Mui-focused fieldset': {
                  border: 'none',        // No outline when focused
                },
              },
            }}
          />
          <ExpensesGraph />
        </Container>
        <Box width="25%">
          <History transactions={[]} />
          <CurrencyConverter />
        </Box>
      </Box>
      <Transactions />
    </Layout>
  );
}

export default Home;
