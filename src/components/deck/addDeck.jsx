import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useCreateDeck } from '../../queries/decks';

const AddDeck = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const loginMutation = useCreateDeck();

  const handleSubmit = async (e) => {
    console.log('Name: ', title);
    console.log('Description: ', description);
    e.preventDefault();
    loginMutation.mutate({ name: title, description: description });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Box m="20px">
      <h2>Create a new Deck</h2>

      <TextField
        label="Title"
        value={title}
        onChange={handleTitleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default AddDeck;
