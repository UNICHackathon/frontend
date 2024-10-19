import React from 'react';
import { Box, Container, AppBar, Toolbar } from '@mui/material';

function Layout({ children }) {
  return (
    <Box>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
      >
        <Toolbar>
          {/*  */}
        </Toolbar>
      </AppBar>
      <Container
        disableGutters
        maxWidth={false}
      >
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
