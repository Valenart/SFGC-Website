import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

import MySign from '/src/assets/GlobalComponents/Footer/MySignWhite.png'

const Footer = () => (
    <Box
        component="footer"
        sx={{
            backgroundColor: '#0B300D',
            color: '#fff',
            textAlign: 'center',
            py: 2,
            width: '100%',
            position: 'relative',
            bottom: 0,
        }}
    >
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 1, sm: 2, md: 4, lg: 8, xl: 20 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', mb: 2 }}>
                <Box conatainer spacing={10} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', mb: 2 }}>
                    <Box item component="nav" sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, textAlign: 'left', gap: 2, mb: 1 }}>
                        <Typography variant="body2" component="a" href="/" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            Home
                        </Typography>
                        <Typography variant="body2" component="a" href="/fotos" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            Fotos
                        </Typography>
                        <Typography variant="body2" component="a" href="/contato" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            Contato
                        </Typography>
                        <Typography variant="body2" component="a" href="/historia" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                            História
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    &copy; {new Date().getFullYear()} São Francisco Golf Club - Todos os direitos reservados.
                </Typography>
            </Box>
            <Divider sx={{ my: 2, backgroundColor: '#FFFFFF33' }} />
            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'center', gap: 1 }}>
                <Typography variant="caption">
                    This site was developed by
                </Typography>
                <Box
                    component="img"
                    src={MySign}
                    alt="Assinatura Richard Valentim"
                    loading="lazy"
                    sx={{ width: '100px' }}
                />
            </Box>
        </Container>
    </Box>
);

export default Footer;