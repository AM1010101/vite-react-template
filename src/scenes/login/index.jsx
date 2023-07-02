import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from '../../queries/user';

// TODO: validate email and password
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  if (loginMutation.isSuccess) {
    // Handle successful login, e.g., redirect to a dashboard page

    return <Navigate to="/dashboard" />;
  }

  if (loginMutation.isError) {
    // Handle login error, e.g., display an error message
    return <div>Error: {loginMutation.error.message}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
