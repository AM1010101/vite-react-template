import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSignup } from '../../queries/user';
import { TextField, Button, Box } from '@mui/material';

// TODO: validate email and password
export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const signupMutation = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordVerify) {
      setPasswordsMatch(false);
      return;
    }
    signupMutation.mutate({ email, password });
  };

  if (signupMutation.isSuccess) {
    // Handle successful login, e.g., redirect to a dashboard page
    return <Navigate to="/dashboard" />;
  }

  if (signupMutation.isError) {
    // Handle login error, e.g., display an error message
    return <div>Error: {signupMutation.error.message}</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
        }}
      >
        <Box
          component="form"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '400px',
            margin: '0 auto',
            padding: '2rem',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
          <TextField
            error={!passwordsMatch}
            label="Confirm Password"
            type="password"
            value={passwordVerify}
            onChange={(e) => setPasswordVerify(e.target.value)}
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="secondary">
            Sign Up
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        {/* Add your splash image or content here */}
        <img
          src="https://images.unsplash.com/photo-1621608120544-2acdbff1b791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
          alt="https://unsplash.com/photos/s7ll0fuKk4Q"
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};
