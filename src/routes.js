import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardApp, Cards, Statistics, Login, Transactions, NotFound } from './pages';
import { PrivateRoute, PrivateRoute1 } from './PrivateRoute';
import Layout from './Layout/Layout';

const RouteConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute1>
            <Login />
          </PrivateRoute1>
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
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default RouteConfig;