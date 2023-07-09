import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);

    // Check token validity periodically
    const tokenCheckInterval = setInterval(() => {
      if (token) {
        const isTokenValid = checkTokenExpired(token);
        if (!isTokenValid) {
          setLogout();
        }
      }
    }, 60000); // Check every minute (adjust as needed)

    return () => {
      clearInterval(tokenCheckInterval); // Clean up the interval on component unmount
    };
  }, []);

  const setLogin = (token) => {
    if (!token) {
      setLogout();
      return;
    }
    if (typeof token !== 'string') {
      setLogout();
      return;
    }
    if (!checkTokenExpired(token)) {
      setLogout();
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
