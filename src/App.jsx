import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import FAQ from './scenes/faq';
import { Login } from './scenes/login';
import Layout from './scenes/global/Layout';
import Home from './scenes/home';
import Dashboard from './scenes/dashboard';
import { AuthContext } from './context/authContext';

function App() {
  const { loggedIn } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!loggedIn) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
