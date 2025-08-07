// components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('authToken');
  // Check if the token exists
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
