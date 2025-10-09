import { Typography, Button, Link, Popover } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './globalcomponents.css';

// ANOTAÇÃO: cores do tema foram movidas para theme.js
/*const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_PAPER = '#d9d9d9';*/

/* COMPONENTE DE TEXTO DE TIPO DE SEÇÃO */

export const Logo = ({ children, fontSize }) => {
    return (
        <Typography variant="h3" color="#fff" id="Logo" component={Link} href="/" sx={{ fontSize: fontSize, textDecoration: 'none' }}>
            {children}
        </Typography>)
}

export const SectionType = ({ children, color, fontFamily, fontSize, fontWeight }) => {
    return (
        <Typography
            variant="h2"
            sx={{
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
export const Title = ({ children, color = '#FFF', fontFamily, fontSize, fontWeight, padding }) => (
    <Typography
        variant="h1"
        sx={{
            color: color,
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
    </Typography>
);

/* COMPONENTE DE TEXTO DE SEÇÃO */
export const Text = ({ children, color, fontFamily, fontSize = '1rem', fontWeight, padding }) => (
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
        }}
        id="text"
        style={{
            fontSize: (typeof window !== 'undefined' && window.innerWidth < 900)
                ? `clamp(var(--font-text-min), calc(0.9rem + 0.4vw), ${fontSize})`
                : fontSize
        }}
    >
        {children}
    </Typography>
);


/* COMPONENTE DE BOTÃO*/
export const CustomButton = ({ children, color = "primary", fontFamily, fontSize, endIcon, padding, onClick, download, ...rest }) => {
    return (
        <Button
            variant="contained"
            color={color}
            sx={{ fontFamily: fontFamily, fontSize: fontSize, borderRadius: 0, padding: padding }}
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