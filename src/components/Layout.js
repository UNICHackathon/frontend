import React from 'react';
import { Box, Container, AppBar, Toolbar, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();

  const buttons = [
    { label: 'Home', path: '/' },
    { label: 'Analytics', path: '/analytics' },
    { label: 'Transactions', path: '/transactions' },
    { label: 'Payments', path: '/payments' },
    { label: 'Services', path: '/services' },
    { label: 'Help', path: '/help' },
  ];

  return (
    <Box>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        sx={{ borderBottom: '2px solid #e9e9e9' }}
      >
        <Toolbar>
          <Box component="img" src="./logo.svg" alt="Logo" sx={{ height: 40, mr: 2 }} />
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {buttons.map((button) => (
              <Button
                key={button.path}
                color={location.pathname === button.path ? 'primary' : 'inherit'}
                href={button.path}
                sx={{ mx: 1 }} // Adds horizontal margin for spacing
              >
                {button.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box component="img" src="./profile.jpg" alt="User Avatar" sx={{ height: 40, width: 40, borderRadius: '50%' }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth={false}
        sx={{ mt: 3 }}
      >
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
