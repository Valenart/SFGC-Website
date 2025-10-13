import React from 'react';
import { Box, Grid } from '@mui/material';
import { Title, Text, SectionType } from '../../../components/globalComponents/globalcomponents';
import { MAX_CONTENT_WIDTH } from '../../../styles/layout';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

import SedeImagem from '/src/assets/Home/Contato/SedeCampo.jpg';

const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';

export default function ContatoSection() {
    return (
        <Box sx={{ py: { xs: 6, md: 8 }, maxWidth: '100vw' }}>
            <Grid container justifyContent="center" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 0 }, maxWidth: MAX_CONTENT_WIDTH, mx: 'auto', alignItems: { xs: 'center', md: "center" } }}>
                {/* Horários */}
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        component="img"
                        src={SedeImagem}
                        alt="Imagem de Sede"
                        sx={{ width: { xs: '80%', md: '80%' }, padding: 1, maxWidth: 'calc(300px + 10vw)', height: 'auto', objectFit: 'cover' }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
                        <SectionType color={COLOR_DARK} fontFamily="inherit" fontSize="1.2rem">
                            HORÁRIOS DE FUNCIONAMENTO
                        </SectionType>
                        <Grid container item xs={12} md={6} direction={{ xs: 'row', md: 'column' }} sx={{ alignItems: 'flex-start' }}>
                            <Grid item xs={6} md={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem" fontWeight="600">
                                        CAMPO
                                    </Text>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="0.85rem">
                                        Terça a Domingo<br />
                                        7:00 - 17:00
                                    </Text>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem" fontWeight="600">
                                        DRIVE RANGE
                                    </Text>
                                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="0.85rem">
                                        Terça a Domingo<br />
                                        7:00 - 18:00
                                    </Text>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {/* Contato */}
                <Grid item xs={12} md={4} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
                        <SectionType color={COLOR_DARK} fontFamily="inherit" fontSize="1.2rem">
                            CONTATO
                        </SectionType>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, color: COLOR_DARK, alignItems: { xs: 'center', md: 'flex-start' } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PhoneIcon sx={{ color: COLOR_DARK, fontSize: 20, display: { xs: 'none', md: 'flex' } }} />
                                <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                                    (11) 3681-8752 / 3681-0329
                                </Text>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon color={COLOR_DARK} sx={{ color: COLOR_DARK, fontSize: 20, display: { xs: 'none', md: 'flex' } }} />
                                <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                                    Saofranciscogolf@uol.com.br
                                </Text>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PlaceIcon sx={{ color: COLOR_DARK, fontSize: 20, display: { xs: 'none', md: 'flex' } }} />
                                <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                                    Av. Martin Luther King 1527, Osasco - SP
                                </Text>
                            </Box>
                            <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                                <span style={{ color: COLOR_PRIMARY, fontWeight: 700 }}>Não aceitamos Cartões de Crédito/Débito.</span>
                            </Text>
                        </Box>

                    </Box>
                </Grid>
                {/* Nota */}
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Text color={COLOR_DARK} fontFamily="inherit" fontSize="1rem">
                        NOTA: O clube não está disponível para eventos externos como casamentos, aniversários ou outras confraternizações.
                    </Text>
                </Grid>
            </Grid>
        </Box>
    );
}
