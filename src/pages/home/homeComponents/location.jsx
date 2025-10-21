// Paleta de cores centralizada
const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_PAPER = '#d9d9d9';

/** LIBS **/
import React from 'react';

/** MUI **/
import { Box, Grid, Paper } from '@mui/material';

/** CUSTOM COMPONENTS **/
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalComponents.jsx';

/** TOKENS / STYLES **/
import { MAX_CONTENT_WIDTH } from '@/styles/layout.js';
import './homeComponents.css';

/** ASSETS **/
import mapaSFGC from '@/assets/Home/Location/MapaSFGC.png';
import CampoGolf from '@/assets/Home/Location/fieldGolf.jpg';
import treeImage from '@/assets/Home/Location/TreeIcon.svg';
import golfBall from '@/assets/Home/Location/golfBall.svg';


export default function LocationSection() {

    return (
        <Box id="LocationSection" sx={{ minHeight: '100vh', py: { xs: 4, md: 8 }, px: 0 }}>
            <Grid container justifyContent="center" alignItems="center" sx={{ maxWidth: MAX_CONTENT_WIDTH, mx: 'auto', gap: 8, px: 0 }}>

                {/* Localização */}
                <Grid container item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={CampoGolf}
                            alt="Mapa do São Francisco Golf Club"
                            sx={{
                                width: { xs: '100%', md: '100%' },
                                maxWidth: { xs: '90%', md: 'calc(500px + 20%)', lg: 'calc(500px + 20%)' },
                                height: 'auto',
                                padding: { xs: '10px', md: '20px' },
                                border: `4px solid ${COLOR_PRIMARY}`,
                                borderRadius: 0,
                                objectFit: 'cover',
                                boxShadow: 'none'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' } }}>
                            <Box sx={{
                                display: 'flex', flexDirection: 'column', position: 'relative', '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    pointerEvents: 'none',
                                    zIndex: -1,
                                    backgroundImage: `url(${treeImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    opacity: 0.2,
                                    top: { xs: -10, md: '0%' },
                                    left: { xs: '50%', md: '42vw' },
                                    transform: { xs: 'translateX(-50%)', md: 'translateX(-180%)' },
                                    width: { xs: 100, md: 200 },
                                    height: { xs: 100, md: 200 }
                                }
                            }}>
                            </Box>
                            <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1.2rem">
                                LOCALIZAÇÃO
                            </SectionType>
                            <Title color={COLOR_DARK} fontFamily="inherit" >
                                O MELHOR DO GOLF<br />EM OSASCO
                            </Title>
                            <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                                O <span style={{ color: COLOR_PRIMARY }}>São Francisco Golf Club</span> está situado em uma das áreas mais nobres de Osasco, sendo o clube de golfe mais próximo do centro de São Paulo. Com fácil acesso, está a poucos minutos do Parque Villa-Lobos e do Shopping União de Osasco, oferecendo conveniência e exclusividade aos seus visitantes.
                            </Text>
                        </Box>
                    </Grid>
                </Grid>

                {/* Nosso Mapa */}
                <Grid container item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' } }}>
                            <Box sx={{
                                display: 'flex', flexDirection: 'column', position: 'relative', '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    pointerEvents: 'none',
                                    zIndex: -1,
                                    backgroundImage: `url(${golfBall})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    opacity: 0.2,
                                    top: { xs: 0, md: '20%' },
                                    left: { xs: '50%', md: '42vw' },
                                    transform: { xs: 'translateX(-50%)', md: 'translateX(-200%)' },
                                    width: { xs: 80, md: 160 },
                                    height: { xs: 80, md: 160 }
                                }
                            }}>
                            </Box>
                            <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1.2rem" >
                                NOSSO MAPA
                            </SectionType>
                            <Title color={COLOR_DARK} fontFamily="inherit" >
                                VISUALIZE O MAPA DO<br />SÃO FRANCISCO GOLF CLUB
                            </Title>
                            <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                                Explore cada detalhe do São Francisco Golf Club com o nosso mapa do campo. Visualize o percurso, planeje suas tacadas e aproveite a melhor experiência de golfe em um ambiente exclusivo e bem localizado.
                            </Text>
                            <CustomButton
                                component="a"
                                href={mapaSFGC}
                                download="MapaSFGC.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                backgroundColor={COLOR_PRIMARY}
                                fontFamily="inherit"
                                fontSize="1rem"
                                padding="10px 24px"
                                sx={{ color: '#fff', width: 'fit-content', borderRadius: 0, mt: 1, fontWeight: 700, boxShadow: 'none', '&:hover': { backgroundColor: '#a06e13' } }}
                                aria-label="Baixar mapa do São Francisco Golf Club"
                            >
                                BAIXE O MAPA
                            </CustomButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={mapaSFGC}
                            alt="Mapa do São Francisco Golf Club"
                            sx={{
                                width: { xs: '100%', md: '100%' },
                                maxWidth: { xs: '90%', md: 'calc(500px + 20%)', lg: 'calc(500px + 20%)' },
                                height: 'auto',
                                padding: { xs: '10px', md: '20px' },
                                border: `4px solid ${COLOR_PRIMARY}`,
                                borderRadius: 0,
                                objectFit: 'cover',
                                boxShadow: 'none'
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
