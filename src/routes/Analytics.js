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
import ExpensesGraph from '@components/ExpensesGraph';

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
          <ExpensesGraph 
            size="large"  // options are "small" or "large"
            ContainerStyles={{
              height:"75vh"
            }}
          />
        </Container>
      </Box>
    </Layout>
  );
}

export default Analytics;
