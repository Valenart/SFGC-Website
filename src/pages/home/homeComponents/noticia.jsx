import React from 'react';
import { Box, Grid } from '@mui/material';
import { SectionType, Title, Text } from '../../../components/globalComponents/globalcomponents';

const COLOR_BG = '#263126';

export default function NoticiaSection() {
    return (
        <Box
            sx={{
                width: '100%',
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
            <Box
                sx={{
                    px: { xs: 1, sm: 2, md: 4, lg: 8, xl: 20 },
                    maxWidth: '1920px',
                    mx: 'auto',
                }}
            >
                <SectionType color="#fff" fontFamily="inherit" fontSize="1.1rem" sx={{ textAlign: 'center', mb: 1 }}>
                    NOTÍCIAS
                </SectionType>
                <Title color="#fff" fontFamily="inherit" fontSize="2.8rem" sx={{ textAlign: 'center', mb: 1 }}>
                    TORNEIOS E ATUALIZAÇÕES
                </Title>
                <Text color="#fff" fontFamily="inherit" fontSize="1.1rem" sx={{ textAlign: 'center', mb: 4 }}>
                    Confira as novidades e os eventos recentes do clube. Fique atento às atualizações.
                </Text>
                <Grid container spacing={4} justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
                    {[1, 2, 3].map((i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: { xs: 220, md: 320 },
                                    bgcolor: '#bdbdbd',
                                    borderRadius: 1,
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
