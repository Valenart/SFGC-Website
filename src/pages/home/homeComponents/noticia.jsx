import React from 'react';
import { Box, Grid } from '@mui/material';
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalcomponents';

const COLOR_PRIMARY = '#fff';
const COLOR_BG = '#263126';

export default function NoticiaSection() {
    return (
        <Box
            sx={{
                width: '100vw', // Corrigido de '100vw' para '100%'
                position: 'relative',
                bgcolor: COLOR_BG,
                minHeight: { xs: 500, md: 600 },
                pb: { xs: 6, md: 10 },
                pt: { xs: 6, md: 8 },
                backgroundImage: 'url(/bg-news.jpg)', // coloque sua imagem em public/bg-news.jpg
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box >
                <Box sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
                    <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
                        NOTÍCIAS —
                    </SectionType>
                    <Title color="#fff" fontFamily="inherit" fontSize="2.2rem">
                        TORNEIOS E ATUALIZAÇÕES
                    </Title>
                    <Text color="#fff" fontFamily="inherit">
                        Confira as novidades e os eventos recentes do clube. Fique atento às atualizações.
                    </Text>
                </Box>

                <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
                    {[1, 2, 3].map((i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Box
                                sx={{
                                    width: '80%',
                                    height: { xs: 220, md: 320 },
                                    bgcolor: '#bdbdbd',
                                    boxShadow: 2,
                                    mx: 'auto',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
