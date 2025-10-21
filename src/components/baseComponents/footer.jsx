/** LIBS **/
import React from 'react';
import { Link } from 'react-router-dom';

/*STYLED COMPONENTS*/
import { Text } from '@/components/globalComponents/globalComponents.jsx';

/** MUI **/
import { Box, Typography, Container, Divider, Grid } from '@mui/material';

/** ASSETS **/
import MySign from '@/assets/baseComponents/footer/mySignWhite.png';
import LogoSFGC from '@/assets/baseComponents/footer/logoSFGC.svg';

const Footer = () => (
    <Box
        component="footer"
        sx={{
            display: 'flex',
            backgroundColor: '#0B300D',
            color: '#fff',
            textAlign: 'center',
            py: 2,
            width: '100%',
            position: 'relative',
            bottom: 0,
        }}
    >
        <Container maxWidth={false} disableGutters sx={{ display: 'flex', flexDirection: 'column', width: '80vw' }} >
            {/* Grid: em xs fica empilhado; em md+ mostra duas colunas (mapa à esquerda, conteúdo à direita) */}
            <Grid container alignItems="center" justifyContent="center" sx={{ display: 'flex' }}>
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2, md: 0 } }}>
                        <Box
                            component="iframe"
                            title="Mapa do São Francisco Golf Club"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.293813160432!2d-46.76536358914396!3d-23.557864608252316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55f517b1d94f%3A0xf89a4667493c2793!2sS%C3%A3o%20Francisco%20Golf%20Club!5e0!3m2!1spt-BR!2sbr!4v1760101725033!5m2!1spt-BR!2sbr"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            sx={{
                                width: { xs: '80vw', sm: '100%', md: '100%' },
                                height: { xs: 150, sm: 150, md: 150 },
                                border: 0,
                                borderRadius: 0,
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        component="img"
                        src={LogoSFGC}
                        alt="Logo São Francisco Golf Club"
                        loading="lazy"
                        sx={{ filter: "opacity(0.8)", width: { xs: '100px', md: '130px', lg: '130px' }, height: 'auto', objectFit: 'cover', boxShadow: 'none' }}
                    />
                </Grid>

                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'column' }, flexWrap: 'wrap', mb: 2, gap: 2, justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' } }}>

                        <Box component="nav" sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }, textAlign: 'left', gap: 2, paddingBlock: { xs: 1, md: 0 } }}>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: 1 }}>
                                <Text component={Link} color='#fff' to="/" fontSize='0.9rem'>
                                    Home
                                </Text>
                                <Text component={Link} color='#fff' to="/fotos" fontSize='0.9rem'>
                                    Fotos
                                </Text>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: 1 }}>
                                <Text component={Link} color='#fff' to="/contato" fontSize='0.9rem'>
                                    Contato
                                </Text>
                                <Text component={Link} to="/historia" color='#fff' fontSize='0.9rem'>
                                    História
                                </Text>
                            </Box>
                        </Box>

                        <Typography variant="body2" >
                            &copy; {new Date().getFullYear()} São Francisco Golf Club - Todos os direitos reservados.
                        </Typography>

                    </Box>

                </Grid>
            </Grid>
            <Divider sx={{ my: 2, backgroundColor: '#FFFFFF33' }} />
            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'center', gap: 1 }}>
                <Typography variant="caption">
                    This site was developed by
                </Typography>
                <Box component="a" href="https://github.com/valenart" target="_blank" rel="noopener noreferrer">
                    <Box
                        component="img"
                        src={MySign}
                        alt="Assinatura Richard Valentim"
                        loading="lazy"
                        sx={{ width: '100px' }}
                    />
                </Box>
            </Box>

        </Container>
    </Box >
);

export default Footer;