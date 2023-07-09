import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';
import { useCreateCard } from '../../queries/cards';

const AddCard = (deckId) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const loginMutation = useCreateCard();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginMutation.mutate({
      front_text: question,
      back_text: answer,
      tags: ['card', 'user'],
      deck_id: deckId['deckId'],
    });
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <Card
      sx={{
        width: 300,
        height: 220,
        cursor: 'pointer',
        '& > :last-child': {
          paddingBottom: 1, // Remove the bottom padding for the last child
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'auto',
          m: 0,
          p: 1,
        }}
      >
        <TextField
          label="Question"
          value={question}
          onChange={handleQuestionChange}
          fullWidth
          multiline
          rows={2}
          margin="dense"
          sx={{ flex: '1 1 auto', py: 0, mt: 0 }}
        />
        <TextField
          label="Answer"
          value={answer}
          onChange={handleAnswerChange}
          fullWidth
          multiline
          rows={2}
          margin="dense"
          sx={{ flex: '1 1 auto', py: 0, mt: 0.5 }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ flex: '1', mb: 0 }}
        >
          Add Card
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddCard;
