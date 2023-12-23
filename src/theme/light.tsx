import { PaletteMode } from "@mui/material";

export const light = {
    palette: {
      mode: 'light' as PaletteMode,
      primary: {
        main: 'rgba(29,51,84,0.84)',
        contrastText: '#000000'
      },
      secondary: {
        main: '#4361ee',
        contrastText: '#fff'
      },
      background: {
        default: '#f1f3f4',
        paper: '#e6e6e6',
      },
      text: {
        primary: '#090809',
      },
      error: {
        main: '#F40000',
      },
      info: {
        main: '#4E8098',
      },
      warning: {
        main: '#ed5502',
      },
      success: {
        main: '#3ba842',
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