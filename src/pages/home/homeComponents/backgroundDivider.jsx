/** MUI **/
import { Box } from '@mui/material';

/** ASSETS **/
import bgDivider from '/src/assets/baseComponents/home/backgroundDivider.jpg';

export default function BackgroundDivider() {
    return (
        <Box
            component="img"
            src={bgDivider}
            alt="Imagem decorativa de divisão de seções"
            loading="lazy"
            sx={{
                position: 'block',
                zIndex: 1,
                filter: 'brightness(0.9)',
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: { xs: 200, md: 400 },
            }}
        />
    )
}