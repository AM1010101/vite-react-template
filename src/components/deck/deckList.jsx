import React from 'react';
import { Grid, Box } from '@mui/material';
import DeckCard from './deckCard';

const DeckList = () => {
  const decks = [
    {
      title: 'Mathematics',
      description:
        'Learn mathematical concepts and problem-solving techniques.',
      numberOfCards: 20,
    },
    {
      title: 'Science',
      description: 'Explore the wonders of the natural world.',
      numberOfCards: 15,
    },
    {
      title: 'History',
      description: 'Discover the events that shaped our world.',
      numberOfCards: 30,
    },
    {
      title: 'Geography',
      description:
        'Explore the diverse landscapes and cultures of the world.',
      numberOfCards: 25,
    },
    {
      title: 'Language Learning',
      description:
        'Enhance your language skills and learn new vocabulary.',
      numberOfCards: 10,
    },
    {
      title: 'Cooking',
      description: 'Master the art of cooking delicious meals.',
      numberOfCards: 25,
    },
    {
      title: 'Politics',
      description:
        'Gain insights into political systems and ideologies.',
      numberOfCards: 15,
    },
    {
      title: 'Becoming an Influencer',
      description:
        'Learn strategies to grow your online presence and engage your audience.',
      numberOfCards: 20,
    },
  ];

  return (
    <Box sx={{ overflowX: 'auto', padding: '16px' }}>
      <Grid container spacing={2}>
        {decks.map((deck, index) => (
          <Grid item key={index}>
            <DeckCard {...deck} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DeckList;
