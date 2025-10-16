/** LIBS **/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

/** MUI **/
import { ThemeProvider, CssBaseline } from '@mui/material';

/** CUSTOM COMPONENTS / PAGES **/
import App from './App.jsx';
import Login from './pages/login/login.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './pages/home/home.jsx';
import Historia from './pages/historia/historiaPage.jsx';
import Fotos from './pages/fotos/fotos.jsx';
import Contato from './pages/contato/contato.jsx';

/** THEME / STYLES **/
import theme from './theme';
import './index.css';

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
        path: 'historia',
        element: <Historia />
      },
      {
        path: 'fotos',
        element: <Fotos />
      },
      {
        path: '/contato',
        element: <Contato />
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
