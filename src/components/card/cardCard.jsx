import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AnkiCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      onClick={handleFlip}
      className={`anki-card ${isFlipped ? 'flipped' : ''}`}
      sx={{
        width: 300,
        height: 200,
        cursor: 'pointer',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        '&.flipped': {
          transform: 'rotateY(180deg)',
        },
      }}
    >
      <CardContent>
        {!isFlipped ? (
          <div className="anki-card-front">
            <Typography variant="h6" component="div">
              Question:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {question}
            </Typography>
          </div>
        ) : (
          <div className="flipped">
            <Typography variant="h6" component="div">
              Answer:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {answer}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnkiCard;
