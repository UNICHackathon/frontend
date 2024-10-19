/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Typography, Container, TextField, InputAdornment, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import EastIcon from '@mui/icons-material/East';

import Balance from '@components/Balance';
import History from '@components/History';
import Layout from '@components/Layout';
import CurrencyConverter from "@components/CurrencyConverter";
import ExpensesGraph from "@components/ExpensesGraph";
import Brokerage from "@components/Brokerage";
import Transactions from "@components/Transactions"

function Home() {
  return (
    <Layout>
      <Box display="flex" width="100%">
        <Box width="25%">
          <Balance balance={25000} />
          <Brokerage />
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
          <Box
            display="flex"
            justifyContent="space-between"
            mt={3}
          >
            <Card sx={{ height: '150px', flex: 1 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <CompareArrowsIcon fontSize="large" />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="div">
                    Transfer <EastIcon fontSize="small" />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ height: '150px', flex: 1, mx: 3 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <CreditCardIcon fontSize="large" />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="div">
                    Card details <EastIcon fontSize="small" />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ height: '150px', flex: 1 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <QrCodeScannerIcon fontSize="large" />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="div">
                    QR Scanner <EastIcon fontSize="small" />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
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
