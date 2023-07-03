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

  // Define the relevant keys for a user
  const relevantKeys = ['email', 'email_verified'];

  // Filter the decoded token based on the relevant keys
  const filteredToken = Object.entries(decodedToken).filter(([key]) =>
    relevantKeys.includes(key)
  );

  // Render the decoded token information
  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h6">User</Typography>
        <List>
          {filteredToken.map(([key, value]) => (
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
