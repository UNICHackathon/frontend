/** @jsxImportSource @emotion/react */
import React, {useState, usEffect} from 'react';
import { Box, Typography, Container, TextField, InputAdornment, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import EastIcon from '@mui/icons-material/East';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Balance from '@components/Balance';
import History from '@components/History';
import Layout from '@components/Layout';
import CurrencyConverter from "@components/CurrencyConverter";
import ExpensesGraph from "@components/ExpensesGraph";
import Brokerage from "@components/Brokerage";
import Transactions from "@components/Transactions"
import Loan from "@components/Loan";
import TransactionsDoughnutChart from "@components/TransactionsDoughnutChart";
import Modal from '@mui/material/Modal';
import ChatBot from '@components/ChatbotUI';

function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleOpenChatbot = () => setIsChatbotOpen(true);
  const handleCloseChatbot = () => setIsChatbotOpen(false);

  return (
    <Layout>
      <Box display="flex" width="100%">
        <Box width="25%">
          <Balance balance={25000} />
          <Loan />
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
            <Card sx={{ height: '150px', flex: 1 }} onClick={handleOpenChatbot}> 
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <SmartToyIcon fontSize="large" />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="div">
                    ChatBot <EastIcon fontSize="small" />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <TransactionsDoughnutChart />
        </Container>
        <Box width="25%">
          <History transactions={[]} />
          <CurrencyConverter />
        </Box>
      </Box>
      <ChatBot
        isChatbotOpen={isChatbotOpen}
        handleCloseChatbot={handleCloseChatbot}
      />
    </Layout>
  );
}

export default Home;
