import { Typography, Button, Link, Popover } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './globalcomponents.css';

// ANOTAÇÃO: cores do tema foram movidas para theme.js
/*const COLOR_PRIMARY = '#B58017';
const COLOR_DARK = '#20491A';
const COLOR_PAPER = '#d9d9d9';*/

/* COMPONENTE DE TEXTO DE TIPO DE SEÇÃO */
export const SectionType = ({ children, color, fontFamily, fontSize, ...rest }) => {
    return (
        <Typography
            variant="h2"
            sx={{ color: color, fontFamily: fontFamily, fontSize: fontSize }}
            id="section-type"
            {...rest}
        >
            — {children}
        </Typography>
    );
}

/* COMPONENTE DE TÍTULO DE SEÇÃO */
export const Title = ({ children, color = '#FFF', fontFamily, fontSize, ...rest }) => (
    <Typography
        variant="h1"
        sx={{
            color: color,
            fontSize: fontSize,
            fontFamily: fontFamily,
            letterSpacing: 1,
            mb: 1
        }}
        id="title"
        {...rest}
    >
        {children}
    </Typography>
);

/* COMPONENTE DE TEXTO DE SEÇÃO */
export const Text = ({ children, color, fontFamily, fontSize, ...rest }) => (
    <Typography
        variant="body1"
        sx={{ color: color, fontFamily: fontFamily, fontSize: fontSize }}
        id="text"
        {...rest}
    >
        {children}
    </Typography>
);


/* COMPONENTE DE BOTÃO*/
export const CustomButton = ({ children, color = "primary", fontFamily, fontSize, endIcon, padding, ...rest }) => {
    return (
        <Button
            variant="contained"
            color={color}
            sx={{ fontFamily: fontFamily, fontSize: fontSize, borderRadius: 0, padding: padding }}
            endIcon={endIcon}
            id="customButton"
            {...rest}
        >
            {children}
        </Button>
    );
}