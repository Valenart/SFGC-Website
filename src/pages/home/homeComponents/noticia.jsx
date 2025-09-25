import React from 'react';
import { Box, Grid } from '@mui/material';
import { SectionType, Title, Text, CustomButton } from '../../../components/globalComponents/globalcomponents';
import './homeComponents.css';

const COLOR_PRIMARY = '#fff';
const COLOR_BG = '#263126';

export default function NoticiaSection() {
    return (
        <Box id="NoticiaSection"
            sx={{
                width: '100vw', // Corrigido de '100vw' para '100%'
                position: 'relative',
                bgcolor: COLOR_BG,
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

                <Grid container alignItems="center" >
                    {[1, 2, 3].map((i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Box
                                sx={{
                                    width: '300px',
                                    height: { xs: 220, md: 320 },
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
