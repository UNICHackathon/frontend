import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Please enter your credentials to login.
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="text"
          color="primary"
          size="small"
          fullWidth
          style={{ marginTop: '8px' }}
        >
          Forgot Password?
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
