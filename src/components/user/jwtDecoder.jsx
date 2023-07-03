import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import jwtDecode from 'jwt-decode';

const JwtDecoder = ({ token }) => {
  // Decode the JWT
  const decodedToken = jwtDecode(token);

  // Render the decoded token information
  return (
    <div
      style={{
        width: '90%',
        overflow: 'auto',
        padding: '16px',
      }}
    >
      <Paper elevation={3} style={{ padding: '8px' }}>
        <Typography variant="h6">Decoded JWT:</Typography>
        <List>
          {Object.entries(decodedToken).map(([key, value]) => (
            <ListItem key={key}>
              <ListItemText
                primary={key}
                secondary={JSON.stringify(value)}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default JwtDecoder;
