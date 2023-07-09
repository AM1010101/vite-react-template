import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HorizontalScrollableList from '../../components/generic/horizontalScroll';
import { Box } from '@mui/material';
import AnkiCard from '../../components/card/cardCard';
import AddCard from '../../components/card/addCard';
import { useGetCards } from '../../queries/cards';
import CircularProgress from '@mui/material/CircularProgress';

const DeckDetails = () => {
  const location = useLocation();
  const { title, description, numberOfCards } = location.state || {};
  const { id } = useParams();
  const { cards, error, isLoading, fetchCards } = useGetCards();

  async function handleFetchCards() {
    await fetchCards({ deck_id: id });
  }

  React.useEffect(() => {
    handleFetchCards();
  }, []);

  return (
    <Box m="20px">
      <h2>Deck Details</h2>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Number of Cards: </p>

      {error && <div>Error: {error.message}</div>}

      <HorizontalScrollableList>
        <AddCard deckId={id} onSubmit={() => handleFetchCards()} />
        {isLoading && <CircularProgress />}
        {cards &&
          cards?.map((card, index) => (
            <AnkiCard
              key={index}
              question={card.front_text}
              answer={card.back_text}
            />
          ))}
      </HorizontalScrollableList>
    </Box>
  );
};

export default DeckDetails;
