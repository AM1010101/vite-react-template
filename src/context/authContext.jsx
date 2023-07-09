import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking the presence of a token in local storage)
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
  }, []);

  const setLogin = (token) => {
    // check if the token is defined
    if (!token) {
      return;
    }
    if (typeof token !== 'string') {
      return;
    }

    const isTokenValid = checkTokenExpired(token);
    if (!isTokenValid) {
      return;
    }

    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  const setLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const authContextValue = {
    loggedIn,
    setLogin,
    setLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function checkTokenExpired(token) {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
  if (decodedToken.exp < currentTime) {
    // Token has expired
    return false;
  }
  return true;
}
