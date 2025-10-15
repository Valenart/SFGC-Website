import { useState } from 'react';
import { Box, Container, Typography, TextField, InputAdornment, OutlinedInput, InputLabel, IconButton, FormControl } from '@mui/material';
import Navbar from './components/baseComponents/navbar';
import Sidebar from './components/baseComponents/sidebar';
import Footer from './components/baseComponents/footer';
import DeleteIcon from '@mui/icons-material/Delete';

import './App.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Login from './pages/login/login';
import { Outlet } from 'react-router-dom';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideMenu = () => {
    setIsOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Navbar handleClickMenu={handleSideMenu} />
      <Sidebar isOpen={isOpen} onClose={handleCloseSidebar} />

      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth={false} disableGutters>
          <Outlet />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
