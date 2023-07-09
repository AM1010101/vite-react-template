import { useMutation } from '@tanstack/react-query';
import { client } from './api';

async function getDecks() {
  const jwt = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await client.get('/decks/decks', config);
  return response.data;
}

export function useGetDecks() {
  const { data, error, isLoading, mutate } = useMutation(getDecks, {
    onSuccess: (data) => {
      console.log('Successfully got decks');
    },
    onError: () => {
      console.log('Error getting decks');
    },
  });

  return {
    decks: data,
    error,
    isLoading,
    mutate,
  };
}

async function createDeck(params) {
  const jwt = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await client.post(
    '/decks/create_deck',
    params,
    config
  );
  return response.data;
}

export function useCreateDeck() {
  const { data, error, isLoading, mutate } = useMutation(createDeck, {
    onSuccess: (data) => {
      console.log('Successfully created deck');
    },
    onError: () => {
      console.log('Error creating deck');
    },
  });

  return {
    deck: data,
    error,
    isLoading,
    mutate,
  };
}
