import { useMutation } from '@tanstack/react-query';
import { client } from './api';

async function getCards(params) {
  const jwt = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await client.post('/cards/cards', params, config);
  return response.data;
}

export function useGetCards() {
  const { data, error, isLoading, mutate } = useMutation(getCards, {
    onSuccess: (data) => {
      console.log('Successfully got cards');
    },
    onError: () => {
      console.log('Error getting cards');
    },
  });
  const fetchCards = async (params) => {
    // Call the getCards function with the provided params
    mutate(params);
  };
  console.log(data);
  return {
    cards: data,
    error,
    isLoading,
    fetchCards,
  };
}

async function createCard(params) {
  const jwt = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await client.post(
    '/cards/create_card',
    params,
    config
  );
  return response.data;
}

export function useCreateCard() {
  const { data, error, isLoading, mutate } = useMutation(createCard, {
    onSuccess: (data) => {
      console.log('Successfully created card');
    },
    onError: () => {
      console.log('Error creating card');
    },
  });

  return {
    card: data,
    error,
    isLoading,
    mutate,
  };
}
