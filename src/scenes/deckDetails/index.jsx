import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HorizontalScrollableList from '../../components/generic/horizontalScroll';
import { Box } from '@mui/material';
import AnkiCard from '../../components/card/cardCard';

const DeckDetails = () => {
  const location = useLocation();
  const { title, description, numberOfCards } = location.state || {};
  console.log(location.state);
  const { id } = useParams(); // Access the deck id from the route parameters

  // create a list of cards
  const cards = [
    {
      question: 'What is the capital of France?',
      answer: 'Paris',
    },
    {
      question: 'What is the capital of Spain?',
      answer: 'Madrid',
    },
    {
      question: 'What is the capital of Germany?',
      answer: 'Berlin',
    },
  ];

  return (
    <Box m="20px">
      <h2>Deck Details</h2>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Number of Cards: {numberOfCards}</p>
      <HorizontalScrollableList>
        {cards.map((card, index) => (
          <AnkiCard
            key={index}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </HorizontalScrollableList>
    </Box>
  );
};

export default DeckDetails;
