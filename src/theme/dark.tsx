export const dark = {
    palette: {
        type: 'dark',
        primary: {
            main: '#546a7b',
            contrastText: '#fdfdfd'
        },
        secondary: {
            main: '#7776bc',
        },
        background: {
            default: '#33415c',
            paper: '#5c677d',
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
            main: '#32c936',
        },
        text: {
            primary: '#fdfdfd',
        },
    },
    typography: {
        fontFamily: '"Quattrocento", "Questrial"',
        button: {
            fontFamily: 'Questrial'
        },
        
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                '&.Mui-focused': {
                    color: '#fdfdfd'
                },
                textDecorationColor: '#fdfdfd',
                label: {
                    color: '#fdfdfd'
                },
                input: {
                    color: '#fdfdfd'
                },    
            }
        }
    }
  }