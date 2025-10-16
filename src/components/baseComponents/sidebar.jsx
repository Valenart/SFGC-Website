

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
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

/** COMPONENTS **/
import { Text, SectionType, CustomButton } from '@/components/globalComponents/globalComponents.jsx';

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

                {/* Contact information and map (using shared components) */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <EmailIcon sx={{ color: '#fff', fontSize: 18 }} />
                            <Text color="#fff" fontSize='0.8rem'>Saofranciscogolf@uol.com.br</Text>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PhoneIcon sx={{ color: '#fff', fontSize: 18 }} />
                            <Text color="#fff" fontSize='0.8rem'>(11) 3681-8752 / 3681-0329</Text>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 1, backgroundColor: '#FFFFFF22' }} />

                    <Box sx={{ width: '100%', borderRadius: 1, overflow: 'hidden', boxShadow: 'inset 0 0 0 1px #ffffff12' }}>
                        {/* Google Maps iframe - small, responsive */}
                        <Box
                            component="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.293813160432!2d-46.76536358914396!3d-23.557864608252316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55f517b1d94f%3A0xf89a4667493c2793!2sS%C3%A3o%20Francisco%20Golf%20Club!5e0!3m2!1spt-BR!2sbr!4v1760101725033!5m2!1spt-BR!2sbr"
                            title="Localização SFGC"
                            width="100%"
                            height="160"
                            style={{ border: 0, display: 'block' }}
                            loading="lazy"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 1 }}>
                        <Box
                            component="img"
                            src={LogoSFGC}
                            alt="Logo São Francisco Golf Club"
                            sx={{ filter: "opacity(0.8)", width: { xs: '72px', md: '80px' }, height: 'auto', objectFit: 'contain' }}
                        />
                    </Box>

                    <Box sx={{ textAlign: 'center', fontSize: 11, color: '#FFFFFF99' }}>
                        &copy; {new Date().getFullYear()} - São Francisco Golf Club
                    </Box>
                </Box>
            </Box>
        </Drawer >
    );
}