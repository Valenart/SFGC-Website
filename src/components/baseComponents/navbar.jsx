import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import { Person, Phone } from '@mui/icons-material';

import logoSFGC from '/src/assets/GlobalComponents/Navbar/logoSFGC.png'
import { Text, SectionType } from '/src/components/globalComponents/globalcomponents';

const COLOR_DARK = '#20491A';

export default function Navbar({ handleClickMenu }) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePersonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <AppBar position="static">
            <Container maxWidth={false} disableGutters sx={{ display: 'flex', backgroundColor: '#0B300D', width: '100%', justifyContent: 'center' }}>
                <Grid container sx={{ display: 'flex', width: { xs: '95vw', sm: '80vw', md: '80vw' }, justifyContent: 'center' }}>
                    <Grid item xs={4} md={4} sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
                        <Toolbar sx={{ p: 0, minHeight: '56px' }}>
                            {/* left controls */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton
                                    size="medium"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 0 }}
                                    onClick={handleClickMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
                                    Menu
                                </Typography>
                            </Box>
                        </Toolbar>
                    </Grid>

                    <Grid item xs={4} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 1 }}>
                        <Toolbar sx={{ p: 0, minHeight: '56px' }}>
                            {/* center logo */}
                            <Box component={Link} to="/" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box
                                    component="img"
                                    src={logoSFGC}
                                    alt="Logo São Francisco Golf Club"
                                    sx={{ width: { xs: '140px', md: '200px', lg: '220px' }, height: 'auto', objectFit: 'contain', boxShadow: 'none' }}
                                />
                            </Box>
                        </Toolbar>
                    </Grid>

                    <Grid item xs={4} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: 1 }}>
                        <Toolbar sx={{ p: 0, minHeight: '56px' }}>
                            {/* right controls */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <IconButton>
                                    <Phone sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton onClick={handlePersonClick}>
                                    <Person sx={{ color: 'white' }} />
                                </IconButton>
                            </Box>

                            <Popover
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={open}
                                onClose={handlePopoverClose}
                                disableScrollLock={true}
                                PaperProps={{
                                    sx: {
                                        p: 1,
                                        borderRadius: 1.5,
                                        boxShadow: '0px 6px 20px rgba(11, 48, 13, 0.25)',
                                        bgcolor: '#fffaf0',
                                        minWidth: 260,
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', p: 1 }}>

                                    <Box sx={{ flex: 1, width: '200px' }}>
                                        <SectionType color={COLOR_DARK} fontFamily="inherit" fontSize="0.9rem">ÁREA ADMINISTRATIVA</SectionType>
                                        <Text sx={{ fontSize: '0.95rem', color: '#333' }}>Acesso exclusivo para funcionários.</Text>

                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                            <Button component={Link} to="/login" variant="contained" sx={{ backgroundColor: '#B58017', color: '#fff', textTransform: 'none', boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }} onClick={handlePopoverClose}>
                                                ACESSAR
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Popover>
                        </Toolbar>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
}