/** MUI **/
import { Typography, Button, Link, Card, CardMedia, CardContent, Box, Chip } from "@mui/material";

/** STYLES **/
import './globalComponents.css';

// ANOTAÇÃO: cores do tema foram movidas para theme.js
/*const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_PAPER = '#d9d9d9';*/

const COLOR_DARK = '#20491A';

/* COMPONENTE DE TEXTO DE TIPO DE SEÇÃO */

export const Logo = ({ children, fontSize }) => {
    return (
        <Typography variant="h3" color="#fff" id="Logo" component={Link} href="/" sx={{ fontSize: fontSize, textDecoration: 'none' }}>
            {children}
        </Typography>)
}

export const SectionType = ({ children, color, fontFamily, fontSize, fontWeight, paddingBlock }) => {
    return (
        <Typography
            variant="h2"
            sx={{
                paddingBlock: paddingBlock,
                color: color,
                fontFamily: fontFamily,
                /* responsive font-size: use provided fontSize as base on md+, and a gentle clamp on xs */
                fontSize: {
                    xs: fontSize
                        ? `clamp(var(--font-section-min), calc(0.95rem + 0.6vw), ${fontSize})`
                        : `clamp(var(--font-section-min), calc(0.95rem + 0.6vw), 1rem)`,
                    md: fontSize || '1rem'
                },
                fontWeight: fontWeight
            }}
            id="section-type"
            style={{
                fontSize: (typeof window !== 'undefined' && window.innerWidth < 900)
                    ? (fontSize ? `clamp(var(--font-section-min), calc(0.95rem + 0.6vw), ${fontSize})` : `clamp(var(--font-section-min), calc(0.95rem + 0.6vw), 1rem)`)
                    : (fontSize || '1rem')
            }}
        >
            {children}
        </Typography>
    );
}

/* COMPONENTE DE TÍTULO DE SEÇÃO */
export const Title = ({ children, color = '#fff', fontFamily, fontSize, fontWeight, padding }) => (
    <Typography
        variant="h1"
        sx={{
            color: color == 'primary' ? COLOR_DARK : color,
            /* responsive title sizing: base on md+, clamp on xs to avoid shrinking too much */
            fontSize: {
                xs: fontSize
                    ? `clamp(var(--font-title-min), calc(1.6rem + 1vw), ${fontSize})`
                    : `clamp(var(--font-title-min), calc(1.6rem + 1vw), 2rem)`,
                md: fontSize ? fontSize : '2.5rem'
            },

            fontFamily: fontFamily,
            fontWeight: fontWeight,
            letterSpacing: 1,
            mb: 1
        }}
        id="title"
        style={{
            fontSize: (typeof window !== 'undefined' && window.innerWidth < 900)
                ? (fontSize ? `clamp(var(--font-title-min), calc(1.6rem + 1vw), ${fontSize})` : `clamp(var(--font-title-min), calc(1.6rem + 1vw), 2.5rem)`)
                : (fontSize || '2.5rem')
        }}
    >
        {children}
    </Typography >
);

/* COMPONENTE DE TEXTO DE SEÇÃO */
export const Text = ({ children, color, fontFamily, fontSize = '1rem', fontWeight, padding, ...rest }) => (
    <Typography
        variant="body1"
        sx={{
            color: color,
            fontFamily: fontFamily,
            /* responsive body text: gentle clamp on small screens */
            fontSize: {
                xs: `clamp(var(--font-text-min), calc(0.9rem + 0.4vw), ${fontSize})`,
                md: fontSize
            },
            fontWeight: fontWeight,
            paddingBlock: padding,
            textDecoration: 'none',
            textOverflow: 'ellipsis',
        }}
        id="text"
        style={{
            fontSize: (typeof window !== 'undefined' && window.innerWidth < 900)
                ? `clamp(var(--font-text-min), calc(0.9rem + 0.4vw), ${fontSize})`
                : fontSize
        }}
        {...rest}
    >
        {children}
    </Typography>
);


/* COMPONENTE DE BOTÃO*/
export const CustomButton = ({ children, color = "primary", fontFamily, fontSize, endIcon, padding, onClick, download, backgroundColor, ...rest }) => {
    return (
        <Button
            variant="contained"
            color={color}
            sx={{ fontFamily: fontFamily, fontSize: fontSize, borderRadius: 0, padding: padding, backgroundColor: backgroundColor }}
            endIcon={endIcon}
            onClick={onClick}
            download={download}
            id="customButton"
            {...rest}
        >
            {children}
        </Button>
    );
}

export const CustomCard = ({ height, width, photo, descriptionImage = '', title, datePost = '', text, useChip = false, colorChip, chipLabel, key }) => {
    return (
        <Card key={key} sx={{ backgroundColor: '#fffaf0', boxShadow: '0px 0px 5px rgba(11, 48, 13, 0.2)', width: width, height: height, overflow: 'hidden' }}>
            <CardMedia
                component="img"
                image={photo}
                alt={descriptionImage}
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                    <SectionType
                        fontSize="1rem"
                        color="#20491A"
                        fontWeight="700"
                    >
                        {title}
                    </SectionType>
                    <Text fontSize="0.7rem" color="#20491A" fontWeight="400">
                        {datePost}
                    </Text>
                </Box>

                <Text fontSize="0.9rem" color="#000000ff" fontWeight="400">
                    {text}
                </Text>

                {useChip ? <Chip label={chipLabel} color={colorChip} sx={{ borderRadius: 0, width: '100px' }} /> : ''}
            </CardContent>
        </Card>
    )
}