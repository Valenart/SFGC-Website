

import React from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { SIDEBAR_WIDTH } from '/src/styles/layout.js';

export default function Sidebar({ isOpen, onClose }) {
    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Fotos', path: '/fotos' },
        { label: 'Contato', path: '/contato' },
        { label: 'Login', path: '/login' },
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
                <Box sx={{ textAlign: 'center', fontSize: 12 }}>
                    &copy; {new Date().getFullYear()} SFGC
                </Box>
            </Box>
        </Drawer>
    );
}