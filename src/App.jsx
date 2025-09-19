
import { useState } from 'react';
import { Box, Container, Typography, TextField, InputAdornment, OutlinedInput, InputLabel, IconButton, FormControl } from '@mui/material';
import Navbar from './components/baseComponents/navbar';
import Sidebar from './components/baseComponents/sidebar';
import Footer from './components/baseComponents/footer';
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
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          px: { xs: 1, sm: 2, md: 4, lg: 8, xl: 20 },
          pt: { xs: 2, sm: 3 },
          minHeight: '80vh',
          backgroundColor: '#F8F2E7'
        }}
      >
        {/* Aqui virão os children das rotas, ex: <Outlet /> */}
      </Container>
      <Footer />
    </>
  );
}

export default App;
