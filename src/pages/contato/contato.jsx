import React from 'react';
import { Box, Grid } from '@mui/material';
import { Title, Text, SectionType, CustomButton } from '@/components/globalComponents/globalComponents';
import { MAX_CONTENT_WIDTH } from '../../styles/layout';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

import SedeImagem from '@/assets/Home/Contato/SedeCampo.jpg';
import MapaSFGC from '@/assets/Home/Location/MapaSFGC.png';

const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';

export default function Contato() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, width: '100%' }}>
            <Grid container justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ display: 'flex', alignItems: 'center', maxWidth: MAX_CONTENT_WIDTH, mx: 'auto', px: 2, gap: 6, flexDirection: { xs: 'column', md: 'row' } }}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        component="img"
                        src={SedeImagem}
                        alt="Sede São Francisco Golf Club"
                        loading="lazy"
                        sx={{ width: { xs: '80%', md: '100%' }, maxWidth: { xs: 'calc(400px + 20%)', md: 520 }, height: 'auto', objectFit: 'cover', border: `4px solid ${COLOR_PRIMARY}` }}
                    />
                </Grid>

                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, textAlign: { xs: 'center', md: 'left' }, alignItems: { xs: 'center', md: 'flex-start' } }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                            <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1.1rem" paddingBlock={1}>
                                CONTATO
                            </SectionType>

                            <Title color={COLOR_DARK} fontFamily="inherit" fontSize="2rem">
                                ENTRE EM CONTATO COM A SEDE
                            </Title>

                            <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                                Estamos à disposição para dúvidas sobre horários, aulas, sócios e informações do clube.
                            </Text>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: { xs: 'center', md: 'flex-start' } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PhoneIcon sx={{ color: COLOR_DARK, display: { xs: 'none', md: 'block' } }} />
                                <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">(11) 3681-8752 / 3681-0329</Text>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon sx={{ color: COLOR_DARK, display: { xs: 'none', md: 'block' } }} />
                                <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">Saofranciscogolf@uol.com.br</Text>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PlaceIcon sx={{ color: COLOR_DARK, display: { xs: 'none', md: 'block' } }} />
                                <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">Av. Martin Luther King 1527, Osasco - SP</Text>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
                            <SectionType color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">HORÁRIOS DE FUNCIONAMENTO</SectionType>
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                                <Box>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem" fontWeight={700}>CAMPO</Text>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">Terça a Domingo — 7:00 - 17:00</Text>
                                </Box>
                                <Box>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem" fontWeight={700}>DRIVE RANGE</Text>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">Terça a Domingo — 7:00 - 18:00</Text>
                                </Box>
                            </Box>
                        </Box>

                        <Box >
                            <Text color={COLOR_PRIMARY} fontFamily="inherit" fontSize="0.95rem">
                                Nota: O clube não está disponível para eventos externos como casamentos, aniversários ou outras confraternizações.
                            </Text>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <CustomButton
                                component="a"
                                href={MapaSFGC}
                                download="MapaSFGC.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                backgroundColor={COLOR_PRIMARY}
                                fontFamily="inherit"
                                fontSize="1rem"
                                padding="10px 24px"
                                sx={{ color: '#fff', borderRadius: 0, fontWeight: 700 }}
                            >
                                BAIXE O MAPA
                            </CustomButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}