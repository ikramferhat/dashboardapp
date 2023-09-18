import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardApp from './pages/Dashboard/DashboardApp';
import Transactions from './pages/Transactions/Transactions';
import Statistics from './pages/Statistics/Statistics';
import { PrivateRoute } from './PrivateRoute';
import Login from './pages/Login/Login';
import Cards from './pages/Cards/Cards';
import Layout from './Layout/Layout';

const RouteConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Login />
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashboardApp />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='cards' element={<Cards />} />
        <Route path='statistics' element={<Statistics />} />
      </Route>
    </Routes>
  )
}

export default RouteConfig;