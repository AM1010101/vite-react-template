import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../global/Header';

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="HOME / LANDING PAGE" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></Box>
      </Box>
    </Box>
  );
};

export default Home;
