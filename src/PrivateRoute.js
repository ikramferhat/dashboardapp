import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Context from './Context';

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(Context);
  return !user ? <Navigate to="/" /> : children;
};

export const PrivateRoute1 = ({ children }) => {
  const { user } = useContext(Context);
  return user ? <Navigate to="/dashboard" /> : children;
};
