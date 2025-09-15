import { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/baseComponents/sidebar';
import './App.css';

function App() {
  // para instalar o style
  const [count, setCount] = useState(0)
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
      </Box>
    </>
  )
}

export default App
