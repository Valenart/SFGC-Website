import React from 'react';
import Icon404SmC from '/src/assets/ErrorPage/Icon404smScreen.svg'
import { Box } from '@mui/material';
import LogoSFGC from '/src/assets/ErrorPage/LogoSFGCBackground.svg'
import { Text } from './globalComponents/globalcomponents';

export default function ErrorPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', justifyContent: 'center', alignItems: 'center', height: '100vh', p: 2, overflow: 'hidden' }}>
            <Box
                component="img"
                src={LogoSFGC}
                alt="Logo São Francisco Golf Club"
                loading="lazy"
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '80vw', md: '80vh' },
                    height: 'auto',
                    objectFit: 'contain',
                    boxShadow: 'none',
                    opacity: 0.2,
                    zIndex: -1,
                }}
            />
            <Box
                component='img'
                src={Icon404SmC}
                alt="Página não encontrada - Error 404"
                sx={{
                    display: { xs: 'block', md: 'block' },
                    width: { xs: '130%', md: '80vh' },
                    height: 'auto'
                }}
            />
            <Text component='a' href='/' color='#0B300D'>Voltar a página inicial</Text>
        </Box>
    );
}

