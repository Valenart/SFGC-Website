// Paleta de cores centralizada
const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_PAPER = '#d9d9d9';


import React from 'react';
import { Box, Grid, Typography, Button, Paper } from '@mui/material';

// Componentes reutilizáveis para estilizações
const SectionTitle = ({ children }) => (
    <Typography variant="subtitle2" sx={{ color: COLOR_PRIMARY, fontWeight: 700, letterSpacing: 1, mb: 1 }}>
        {children}
    </Typography>
);

const SectionPaper = ({ height = 200 }) => (
    <Paper elevation={0} sx={{ border: `4px solid ${COLOR_PRIMARY}`, bgcolor: COLOR_PAPER, height, mb: { xs: 2, md: 0 } }} />
);

const SectionText = ({ children }) => (
    <Typography variant="body1" sx={{ color: COLOR_DARK, maxWidth: 420 }}>
        {children}
    </Typography>
);

export default function LocationSection() {
    return (
        <Box sx={{ minHeight: '100vh', py: { xs: 4, md: 8 } }}>
            <Grid container spacing={6} justifyContent="center" alignItems="flex-start" sx={{ maxWidth: 1400, mx: 'auto' }}>
                {/* Localização */}
                <Grid item xs={12} md={6}>
                    <SectionPaper height={260} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <SectionTitle>— LOCALIZAÇÃO</SectionTitle>
                        <Typography variant="h4" sx={{ color: COLOR_DARK, fontWeight: 700, mb: 1, lineHeight: 1.1 }}>
                            O MELHOR DO GOLF<br />EM OSASCO
                        </Typography>
                        <SectionText>
                            O <span style={{ color: COLOR_PRIMARY }}>São Francisco Golf Club</span> está situado em uma das áreas mais nobres de Osasco, sendo o clube de golfe mais próximo do centro de São Paulo. Com fácil acesso, está a poucos minutos do Parque Villa-Lobos e do Shopping União de Osasco, oferecendo conveniência e exclusividade aos seus visitantes.
                        </SectionText>
                        {/* Imagem da árvore pode ser posicionada com background ou SVG, aqui é omitido para foco no layout */}
                    </Box>
                </Grid>

                {/* Nosso Mapa */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                        <SectionTitle>— NOSSO MAPA</SectionTitle>
                        <Typography variant="h4" sx={{ color: COLOR_DARK, fontWeight: 700, mb: 1, lineHeight: 1.1 }}>
                            VISUALIZE O MAPA DO<br />SÃO FRANCISCO GOLF CLUB
                        </Typography>
                        <SectionText>
                            Explore cada detalhe do São Francisco Golf Club com o nosso mapa do campo. Visualize o percurso, planeje suas tacadas e aproveite a melhor experiência de golfe em um ambiente exclusivo e bem localizado.
                        </SectionText>
                        <Button variant="contained" sx={{ backgroundColor: COLOR_PRIMARY, color: '#fff', width: 'fit-content', borderRadius: 0, px: 3, py: 1.2, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}>
                            BAIXE O PDF
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SectionPaper />
                </Grid>
            </Grid>
        </Box>
    );
}
