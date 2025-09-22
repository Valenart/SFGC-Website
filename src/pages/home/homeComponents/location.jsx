// Paleta de cores centralizada
const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_PAPER = '#d9d9d9';

import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalcomponents';

// Componentes reutilizáveis para estilizações
const SectionPaper = ({ height = 260 }) => (
    <Paper elevation={0} sx={{ bgcolor: COLOR_PAPER, height, borderRadius: 0, width: '300px' }} />
);

const SectionTitle = ({ children }) => (
    <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
        {children.replace('— ', '')}
    </SectionType>
);

const SectionText = ({ children }) => (
    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
        {children}
    </Text>
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
                        <SectionTitle> LOCALIZAÇÃO </SectionTitle>
                        <Title color={COLOR_DARK} fontFamily="inherit" fontSize="2.2rem">
                            O MELHOR DO GOLF<br />EM OSASCO
                        </Title>
                        <SectionText>
                            O <span style={{ color: COLOR_PRIMARY }}>São Francisco Golf Club</span> está situado em uma das áreas mais nobres de Osasco, sendo o clube de golfe mais próximo do centro de São Paulo. Com fácil acesso, está a poucos minutos do Parque Villa-Lobos e do Shopping União de Osasco, oferecendo conveniência e exclusividade aos seus visitantes.
                        </SectionText>
                        {/* Imagem da árvore pode ser posicionada com background ou SVG, aqui é omitido para foco no layout */}
                    </Box>
                </Grid>

                {/* Nosso Mapa */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                        <SectionTitle> NOSSO MAPA </SectionTitle>
                        <Title color={COLOR_DARK} fontFamily="inherit" fontSize="2.2rem">
                            VISUALIZE O MAPA DO<br />SÃO FRANCISCO GOLF CLUB
                        </Title>
                        <SectionText>
                            Explore cada detalhe do São Francisco Golf Club com o nosso mapa do campo. Visualize o percurso, planeje suas tacadas e aproveite a melhor experiência de golfe em um ambiente exclusivo e bem localizado.
                        </SectionText>
                        <CustomButton
                            backgroundColor={COLOR_PRIMARY}
                            fontFamily="inherit"
                            fontSize="1rem"
                            padding="10px 24px"
                            sx={{ color: '#fff', width: 'fit-content', borderRadius: 0, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}
                        >
                            BAIXE O PDF
                        </CustomButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SectionPaper />
                </Grid>
            </Grid>
        </Box>
    );
}
