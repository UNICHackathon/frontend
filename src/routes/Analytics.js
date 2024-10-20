import React, {useState} from 'react';
import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { Search, ArrowBack, ArrowForward, MoreVert } from '@mui/icons-material';

import Layout from '@components/Layout';

function Analytics() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Container>
          <Typography variant="h4">Analytics</Typography>
          <Box display="flex" alignItems="center" mt={2} width="100%">
            <TextField
              variant="outlined"
              placeholder="Find any events and operations"
              fullWidth
              sx={{ ml: 2 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <ButtonGroup variant="contained">
                        <IconButton>
                          <ArrowBack />
                        </IconButton>
                        <IconButton onClick={handleMenuClick}>
                          <MoreVert />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
                        </Menu>
                        <IconButton>
                          <ArrowForward />
                        </IconButton>
                      </ButtonGroup>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  )
                }
              }}
            />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default Analytics;
