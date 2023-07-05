import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DeckCard = ({ title, description, numberOfCards, deckId }) => {
  return (
    <Link
      to={`/decks/${deckId}`}
      state={{
        title,
        description,
        numberOfCards,
      }}
      style={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          backgroundColor: '#f5f5f5',
          width: '100%',
          height: '100%',
          '@media (min-width: 600px)': {
            width: 300,
            height: 200,
          },
          '@media (min-width: 960px)': {
            width: 300,
            height: 200,
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Number of cards: {numberOfCards}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DeckCard;
