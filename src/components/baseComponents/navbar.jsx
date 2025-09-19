
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import { Person, Phone } from '@mui/icons-material';

export default function Navbar({ handleClickMenu }) {
    return (
        <AppBar position="static">
            <Container maxWidth={false} disableGutters sx={{ px: { xs: 1, sm: 2, md: 4, lg: 8, xl: 20, backgroundColor: '#0B300D', } }}>
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClickMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Menu
                    </Typography>
                    <IconButton>
                        <Phone sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton>
                        <Person sx={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}