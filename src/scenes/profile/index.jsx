import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import JwtDecoder from '../../components/user/jwtDecoder';

const UserScreen = () => {
  return (
    <div>
      <Card sx={{ margin: '16px' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <Avatar
                alt="User Avatar"
                src="/path/to/avatar.jpg"
                sx={{ width: 120, height: 120 }}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10}>
              <Typography variant="h4" gutterBottom>
                John Doe
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: johndoe@example.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                Joined: January 1, 2023
              </Typography>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed fermentum neque in urna vulputate, ut egestas metus
              luctus. Nulla facilisi. Integer quis tellus vitae mauris
              dapibus bibendum. Quisque ac lectus ut nisl faucibus
              volutpat. Sed malesuada, elit ut elementum fermentum,
              est nunc finibus leo, vel finibus purus nisl vel lectus.
            </Typography>
          </Box>
          <Box mt={4}>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ margin: '16px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            My Posts
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed fermentum neque in urna vulputate, ut egestas metus
            luctus. Nulla facilisi. Integer quis tellus vitae mauris
            dapibus bibendum. Quisque ac lectus ut nisl faucibus
          </Typography>
        </CardContent>
      </Card>
      <JwtDecoder token={localStorage.getItem('token')} />
    </div>
  );
};

export default UserScreen;
