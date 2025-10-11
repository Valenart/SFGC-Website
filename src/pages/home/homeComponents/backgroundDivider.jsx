import { Box } from '@mui/material'
import bgDivider from '/src/assets/GlobalComponents/Home/backgroundDivider.jpg'

export default function BackgroundDivider() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bgDivider})`,
                backgroundAttachment: 'fixed', // efeito parallax
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'brightness(0.9)',
                width: '100%',
                height: { xs: '200px', md: '400px' },
                zIndex: 1,
            }}
        />
    )
}