/** @jsxImportSource @emotion/react */

import React, {useState, usEffect} from 'react';
import { Box, Typography, Container, TextField, InputAdornment, Card, CardContent } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EastIcon from '@mui/icons-material/East';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Balance from '@components/Balance';
import History from '@components/History';
import Layout from '@components/Layout';
import CurrencyConverter from "@components/CurrencyConverter";
import ExpensesGraph from "@components/ExpensesGraph";
import Brokerage from "@components/Brokerage";
import Loan from "@components/Loan";
import TransactionsDoughnutChart from "@components/TransactionsDoughnutChart";
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
          <Typography variant="h4" fontSize={24}>
            Good evening, John! 👋
          </Typography>
          <ExpensesGraph />
          <Box
            display="flex"
            justifyContent="space-between"
            gap={3}
            mt={3}
          >
            <Card sx={{ height: '150px', flex: 1 }}>
              <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <CompareArrowsIcon fontSize="large" />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="div" sx={{ display: 'flex' }}>
                    Transfer <EastIcon fontSize="small" sx={{ ml: 'auto' }} />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ height: '150px', flex: 1 }}>
              <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <CreditCardIcon fontSize="large" />
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="div" sx={{ display: 'flex' }}>
                    Card details <EastIcon fontSize="small" sx={{ ml: 'auto' }} />
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
          <History />
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
