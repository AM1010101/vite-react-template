import React from 'react';
import { Box, useTheme, List } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../global/Header';
import DeckCard from '../../components/deck/deckCard';
import HorizontalScrollableList from '../../components/generic/horizontalScroll';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const decks = [
    {
      title: 'Mathematics',
      description:
        'Learn mathematical concepts and problem-solving techniques.',
      numberOfCards: 20,
      deckId: '1',
    },
    {
      title: 'Science',
      description: 'Explore the wonders of the natural world.',
      numberOfCards: 15,
      deckId: '2',
    },
    {
      title: 'History',
      description: 'Discover the events that shaped our world.',
      numberOfCards: 30,
      deckId: '3',
    },
    {
      title: 'Geography',
      description:
        'Explore the diverse landscapes and cultures of the world.',
      numberOfCards: 25,
      deckId: '4',
    },
    {
      title: 'Language Learning',
      description:
        'Enhance your language skills and learn new vocabulary.',
      numberOfCards: 10,
      deckId: '5',
    },
    {
      title: 'Cooking',
      description: 'Master the art of cooking delicious meals.',
      numberOfCards: 25,
      deckId: '6',
    },
    {
      title: 'Politics',
      description:
        'Gain insights into political systems and ideologies.',
      numberOfCards: 15,
      deckId: '7',
    },
    {
      title: 'Becoming an Influencer',
      description:
        'Learn strategies to grow your online presence and engage your audience.',
      numberOfCards: 20,
      deckId: '8',
    },
  ];

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="DASHBOARD / DECKS" />
      </Box>
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
            {decks.map((deck, index) => (
              <DeckCard key={index} {...deck} />
            ))}
          </HorizontalScrollableList>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
