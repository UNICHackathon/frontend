import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Modal, 
  ButtonGroup
} from '@mui/material';

const styles = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 720,
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  chatbot: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  messageList: {
    flexGrow: 1,
    overflow: 'auto',
    padding: 2,
  },
  message: {
    marginBottom: 1,
    padding: 1,
    borderRadius: 1,
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: 'primary.light',
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
  botMessage: {
    backgroundColor: 'grey.100',
    alignSelf: 'flex-start',
  },
  form: {
    display: 'flex',
    padding: 2,
  },
  input: {
    flexGrow: 1,
    marginRight: 1,
  },
  optionButtons: {
    marginLeft: "10px",
  }
};

function ChatBot({isChatbotOpen, handleCloseChatbot}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [options, setOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState('initial');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isChatbotOpen && messages.length === 0) {
      botReply("Welcome to our financial chatbot! Here are some quick financial tips:\n\n1. Save at least 20% of your income\n2. Invest in a diversified portfolio\n3. Build an emergency fund\n4. Pay off high-interest debt first\n\nHow can I assist you today?", ['I need more financial advice', 'I want to buy something']);
    }
  }, [isChatbotOpen, messages]);

  const botReply = (message, nextOptions = []) => {
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'bot' }]);
    setOptions(nextOptions);
  };

  const handleOptionClick = (option) => {
    setMessages(prevMessages => [...prevMessages, { text: option, sender: 'user' }]);
    
    switch (currentStep) {
      case 'initial':
        if (option === 'I need more financial advice') {
          botReply("What specific area of finance would you like advice on?", ["Budgeting", "Investing", "Debt Management", "Retirement Planning"]);
          setCurrentStep('financial_advice');
        } else if (option === 'I want to buy something') {
          botReply("What are you considering buying?", ["Car", "House", "Stocks", "Other"]);
          setCurrentStep('purchase_advice');
        }
        break;
      case 'financial_advice':
        let advice = "";
        switch (option) {
          case "Budgeting":
            advice = "For effective budgeting: Track your expenses, categorize spending, and use the 50/30/20 rule (50% needs, 30% wants, 20% savings/debt).";
            break;
          case "Investing":
            advice = "For investing: Start early, diversify your portfolio, consider low-cost index funds, and don't try to time the market.";
            break;
          case "Debt Management":
            advice = "To manage debt: Prioritize high-interest debt, consider debt consolidation, and avoid taking on new debt while paying off existing ones.";
            break;
          case "Retirement Planning":
            advice = "For retirement: Start saving early, maximize employer matches in 401(k)s, consider Roth IRAs, and adjust your strategy as you age.";
            break;
        }
        botReply(advice + "\n\nWas this advice helpful?", ["Yes, thank you", "I need more information"]);
        setCurrentStep('advice_feedback');
        break;
      case 'purchase_advice':
        let purchaseAdvice = "";
        switch (option) {
          case "Car":
            purchaseAdvice = "When buying a car, consider factors like fuel efficiency, maintenance costs, and resale value. Don't forget to negotiate the price and shop around for the best financing options.";
            break;
          case "House":
            purchaseAdvice = "For house purchases, location, property taxes, and potential for appreciation are key factors. Make sure to get a thorough inspection and consider future resale value.";
            break;
          case "Stocks":
            purchaseAdvice = "When investing in stocks, diversify your portfolio, do thorough research on companies, and consider your risk tolerance. Don't invest money you can't afford to lose.";
            break;
          case "Other":
            purchaseAdvice = "For any major purchase, always do thorough research, compare prices, and consider long-term costs and benefits. Make sure it aligns with your overall financial goals.";
            break;
        }
        botReply(purchaseAdvice + "\n\nWas this advice helpful?", ["Yes, thank you", "I need more information"]);
        setCurrentStep('purchase_advice_feedback');
        break;
      case 'advice_feedback':
      case 'purchase_advice_feedback':
        handleFeedback(option);
        break;
      case 'final_question':
        if (option === "No, thank you") {
          botReply("Thank you for using our financial chatbot. Remember to always consider your long-term financial goals. Have a great day!");
          setOptions([]);
          setCurrentStep('ended');
        } else {
          botReply("What else can I assist you with?", ["I need more financial advice", "I want to buy something"]);
          setCurrentStep('initial');
        }
        break;
    }
  };

  const handleFeedback = (option) => {
    if (option === "Yes, thank you") {
      botReply("Great! I'm glad the advice was helpful. Is there anything else I can assist you with?", ["Yes", "No, thank you"]);
      setCurrentStep('final_question');
    } else {
      botReply("I apologize if the advice wasn't sufficient. For more detailed information, consider consulting with a financial advisor. Is there anything else I can help with?", ["Yes", "No, thank you"]);
      setCurrentStep('final_question');
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
    setInput('');

    // Simple bot response to custom messages
    setTimeout(() => {
      botReply("I'm sorry, I can only respond to predefined options at the moment. Please choose from the available options.");
    }, 1000);
  };

  return (
    <Modal
      open={isChatbotOpen}
      onClose={handleCloseChatbot}
      aria-labelledby="chatbot-modal-title"
      aria-describedby="chatbot-modal-description"
    >
      <Paper elevation={3} sx={styles.modal}>
        <Box sx={styles.chatbot}>
          <Typography variant="h6" sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            ChatBot
          </Typography>
          <List sx={styles.messageList}>
            {messages.map((message, index) => (
              <ListItem key={index} sx={{
                ...styles.message,
                ...(message.sender === 'user' ? styles.userMessage : styles.botMessage)
              }}>
                <ListItemText 
                  primary={
                    <Typography variant="body2">
                      {message.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
          <Box sx={styles.optionButtons}>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              {options.map((option, index) => (
                <Button key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box component="form" onSubmit={handleSendMessage} sx={styles.form}>
            <TextField
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              sx={styles.input}
            />
            <Button type="submit" variant="contained">
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
}

export default ChatBot;