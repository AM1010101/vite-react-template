import React from 'react';
import { useParams } from 'react-router-dom';

const DeckDetails = () => {
  const { id } = useParams(); // Access the deck id from the route parameters

  // Assuming you have a deck object or data source
  const deck = {
    id: 1,
    title: 'Mathematics',
    description:
      'Learn mathematical concepts and problem-solving techniques.',
    numberOfCards: 20,
  };

  return (
    <div>
      <h2>Deck Details</h2>
      <p>ID: {deck.id}</p>
      <p>Title: {deck.title}</p>
      <p>Description: {deck.description}</p>
      <p>Number of Cards: {deck.numberOfCards}</p>
    </div>
  );
};

export default DeckDetails;
