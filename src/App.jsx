
import { useState } from 'react';
import { Box, Container, Typography, TextField, InputAdornment, OutlinedInput, InputLabel, IconButton, FormControl } from '@mui/material';
import Navbar from './components/baseComponents/navbar';
import Sidebar from './components/baseComponents/sidebar';

import DeleteIcon from '@mui/icons-material/Delete';

import { TitleSection } from './components/styledComponents/styles';

import './App.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Login from './pages/login/login';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideMenu = () => {
    setIsOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const StyledTitle = TitleSection;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar handleClickMenu={handleSideMenu} />
      <Sidebar isOpen={isOpen} onClose={handleCloseSidebar} />
      <Footer />
    </>
  );
}

export default App;
