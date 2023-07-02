import React, { createContext, useState, useEffect } from 'react';

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

    // Store the JWT token in local storage or a secure cookie

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
