import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import App from './App'
import Dashboard from './pages/admin/Dashboard'

const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/admin',
      element: <Dashboard/>
    }
  ];

  let router = useRoutes(routes);
  return router;
}

export const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default Routes;
