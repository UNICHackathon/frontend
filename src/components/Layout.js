import React from 'react';
import { Box, Container, AppBar, Toolbar, Typography } from '@mui/material';

function Layout({ children }) {
  return (
    <Box>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
      >
        <Toolbar>
          <Typography variant="h5">Good morning, John!</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
