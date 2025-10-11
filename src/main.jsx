import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Navigate, RouterProvider, createBrowserRouter, } from 'react-router-dom';



import Login from './pages/login/login.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './pages/home/home.jsx';
import Historia from './pages/historia/historiaPage.jsx';


import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Historia',
        element: <Historia />
      },
      {
        // path: '/Fotos',
        // element: <Fotos/>
      },
    ]
  },
  {
    path: 'login',
    element: <Login />
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
