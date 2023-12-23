import { PaletteMode } from "@mui/material";

export const dark = {
    palette: {
        mode: 'dark' as PaletteMode,
        primary: {
          main: '#3f8894',
          contrastText: '#fff'
        },
        secondary: {
          main: '#c1121f',
        },
        background: {
          default: '#17171f',
          paper: '#2b2929',
        },
        error: {
          main: '#ff1c08',
        },
        warning: {
          main: '#ff9f14',
        },
        info: {
          main: '#ffff8d',
        },
        success: {
          main: '#4CAF50',
        },
        text: {
          primary: '#faf4f4',
        },
    },
    typography: {
        fontFamily: '"Quattrocento", "Questrial"',
        button: {
            fontFamily: 'Questrial'
        },
        body1: {
            fontFamily: 'Questrial'
        },
        body2: {
          fontFamily: 'Questrial'
      },
    },
}