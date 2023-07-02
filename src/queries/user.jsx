import { useQuery, useMutation } from '@tanstack/react-query';
import { client } from './api';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

async function login(credentials) {
  const response = await client.post('/users/login', credentials);
  return response.data;
}

export function useLogin() {
  const { setLogin } = useContext(AuthContext);
  return useMutation(login, {
    onSuccess: (data) => {
      // Store the JWT token in local storage or a secure cookie
      localStorage.setItem('token', data.token);
      setLogin(data.token);
      console.log('Logged in successfully');
    },
    onError: () => {
      console.log('Login failed');
    },
  });
}

async function signup(credentials) {
  const response = await client.post(
    '/users/add_user_and_login',
    credentials
  );
  return response.data;
}

export function useSignup() {
  const { setLogin } = useContext(AuthContext);

  const signupMutation = useMutation(signup, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      setLogin(data.token);
      console.log('Signup successful');
    },
    onError: () => {
      console.log('Signup failed');
    },
  });

  return signupMutation;
}
