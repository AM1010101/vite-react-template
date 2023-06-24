import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import FAQ from './scenes/faq';
import { Login } from './scenes/login';
import { useState, useContext } from 'react';
import Layout from './scenes/global/Layout';
import Home from './scenes/home';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!authenticated) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route
          path="/login"
          element={
            <Login auth={authenticated} setAuth={setAuthenticated} />
          }
        />
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
