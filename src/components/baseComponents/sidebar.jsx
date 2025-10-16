

/** LIBS **/
import React from 'react';

/** MUI **/
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Divider, IconButton } from '@mui/material';

/** ROUTER **/
import { Link } from 'react-router-dom';

/** LAYOUT TOKENS **/
import { SIDEBAR_WIDTH } from '@/styles/layout.js';

/** ICONS **/
import CloseIcon from '@mui/icons-material/Close';

/** ASSETS **/
import LogoSFGC from '@/assets/baseComponents/footer/logoSFGC.svg';

export default function Sidebar({ isOpen, onClose }) {
    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Fotos', path: '/fotos' },
        { label: 'História', path: '/historia' },
    ];

    return (
        <Drawer anchor="left" open={isOpen} onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: '#0B300D',
                    color: '#fff',
                }
            }}
        >
            <Box sx={{ width: SIDEBAR_WIDTH, p: { xs: 2, md: 3 } }} role="presentation" onClick={onClose} onKeyDown={onClose}>

                <IconButton>
                    <CloseIcon sx={{ color: '#fff' }} />
                </IconButton>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton component={Link} to={item.path}>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{ my: 2, backgroundColor: '#FFFFFF33' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'center', fontSize: 12 }}>
                        &copy; {new Date().getFullYear()} - São Francisco Golf Club
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={LogoSFGC}
                            alt="Logo São Francisco Golf Club"
                            loading="lazy"
                            sx={{ filter: "opacity(0.8)", width: { xs: '80px', md: '80px', lg: '80px' }, height: 'auto', objectFit: 'cover', boxShadow: 'none' }}
                        />
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
}