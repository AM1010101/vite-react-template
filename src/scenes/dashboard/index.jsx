import React, { useEffect, useState } from 'react';
import { Box, useTheme, Button } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../global/Header';
import DeckCard from '../../components/deck/deckCard';
import HorizontalScrollableList from '../../components/generic/horizontalScroll';
import { useGetDecks } from '../../queries/decks';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { decks, error, isLoading, mutate } = useGetDecks();

  const handleFetchDecks = () => {
    mutate(); // Trigger the mutation to fetch the decks
  };

  useEffect(() => {
    handleFetchDecks();
  }, []);

  const handleRefresh = () => {
    console.log('Refresh');
    handleFetchDecks();
  };

  console.log(decks?.data);
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="DASHBOARD / DECKS" />
        <Button variant="contained" onClick={handleRefresh}>
          Refresh
        </Button>
      </Box>
      {isLoading && <CircularProgress />}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && !error && (
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 2fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 12"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="start"
            overflow="hidden"
          >
            <HorizontalScrollableList>
              {decks?.data?.map((deck, index) => (
                <DeckCard key={index} {...deck} />
              ))}
            </HorizontalScrollableList>
          </Box>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button component={Link} to="/add_deck" variant="contained">
          Add Deck
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
