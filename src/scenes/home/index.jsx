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
        {/* <Header title="HOME / LANDING PAGE" /> */}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        height="100%"
      >
        <Box
          gridColumn="span 6 "
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="start"
          justifyContent="center"
          height="100%"
        >
          <div>
            <h1>WELCOME TO LEARN WITH GPT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam voluptatum, quibusdam, voluptate, quia voluptas
              quod quos voluptatibus quae doloribus quidem voluptatem.
              Quisquam voluptatum, quibusdam, voluptate, quia voluptas
              quod quos voluptatibus quae doloribus quidem voluptatem.
            </p>
            <h1>Another Great Feature</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam voluptatum, quibusdam, voluptate, quia voluptas
              quod quos voluptatibus quae doloribus quidem voluptatem.
              Quisquam voluptatum, quibusdam, voluptate, quia voluptas
              quod quos voluptatibus quae doloribus quidem voluptatem.
            </p>
            <h1>Call to Action</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam voluptatum, quibusdam, voluptate, quia voluptas
              quod quos voluptatibus quae doloribus quidem voluptatem.
              Quisquam voluptatum, quibusdam, voluptate, quia voluptas
              quod quos voluptatibus quae doloribus quidem voluptatem.
            </p>
          </div>
        </Box>
        <Box
          gridColumn="span 6"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="start"
          justifyContent="center"
          height="100%"
        >
          <Box
            backgroundColor={colors.primary[400]}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
              height: '80vh',
              margin: '0 auto',
              padding: '2rem',
            }}
          >
            Demo should go here
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
