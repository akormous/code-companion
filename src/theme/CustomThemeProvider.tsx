import { useState, useMemo, createContext } from "react";
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material';
import { dark } from "./dark";
import { light } from "./light";

export const ColorModeContext = createContext( { toggleColorMode: () => {} } );

export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        }
    }), []);

    const theme = useMemo(() => {
        if(mode === 'light') {
            return responsiveFontSizes( createTheme(light) );
        }
        return responsiveFontSizes( createTheme(dark) );
    }, [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}