import React from 'react';
import { Box, Grid } from '@mui/material';
import bgNoticia from '../../../assets/Home/Noticias/backgroundNoticias.jpg';
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalcomponents';
import './homeComponents.css';
import { MAX_CONTENT_WIDTH } from '/src/styles/layout.js';

const COLOR_PRIMARY = '#fff';
const COLOR_BG = '#263126';

export default function NoticiaSection() {
    return (
        <Box id="NoticiaSection"

            sx={{
                width: '100vw',
                backgroundImage: `url(${bgNoticia})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: { xs: 4, md: 8 },
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: MAX_CONTENT_WIDTH, alignItems: 'center', mx: 'auto' }}>
                <Box sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column', width: '100%', gap: 2 }}>
                    <SectionType color={COLOR_PRIMARY} fontFamily="inherit" fontSize="1rem">
                        NOTÍCIAS
                    </SectionType>
                    <Title color="#fff" fontFamily="inherit" fontSize="2.2rem">
                        TORNEIOS E ATUALIZAÇÕES
                    </Title>
                    <Text color="#fff" fontFamily="inherit">
                        Confira as novidades e os eventos recentes do clube. Fique atento às atualizações.
                    </Text>
                </Box>

                <Grid container alignItems="center" sx={{ gap: 4, justifyContent: 'center' }}>
                    {[1, 2, 3].map((i) => (
                        <Grid item xs={12} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                sx={{
                                    width: { xs: '90%', md: 300 },
                                    height: { xs: 220, md: 250 },
                                    bgcolor: '#bdbdbd',
                                    boxShadow: 2,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
