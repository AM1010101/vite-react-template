import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

const DeckCard = ({ title, description, numberOfCards, deckId }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
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
      <Link
        to={`/decks/${deckId}`}
        state={{
          title,
          description,
          numberOfCards,
        }}
        style={{ textDecoration: 'none' }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Typography
            variant="h3"
            component="div"
            color="text.primary"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Number of cards: {numberOfCards}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DeckCard;
