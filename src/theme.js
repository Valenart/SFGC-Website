import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#B58017',
            contrastText: '#fff',
        },
        secondary: {
            main: '#20491A',
            contrastText: '#fff',
        },
        background: {
            default: '#0B300D',
            paper: '#d9d9d9',
        },
    },
    shape: {
        borderRadius: 0,
    },
    typography: {
        fontFamily: 'inherit',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    boxShadow: 'none',
                    padding: '10px 24px',
                },
            },
        },
    },
});

export default theme;
