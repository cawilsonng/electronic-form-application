import {AppProps} from "next/app";
import {createTheme, Theme, ThemeProvider, useMediaQuery} from "@mui/material";
import React from "react";
import getCPalette from "../config/theme/cTheme";
import getCTypography from "../config/theme/cTypography";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from '@mui/x-date-pickers';
import {CookiesProvider} from "react-cookie";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    },
    togglePreferMode: () => {
    },
    getCurrentMode: (): string => {
        return '';
    }
});

function CustomApp({Component, pageProps}: AppProps) {
    // User System preference
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [modeState, setMode] = React.useState<'light' | 'dark' | 'device'>('device');

    const colorMode = {
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        togglePreferMode: () => {
            setMode('device');
        },
        getCurrentMode: () => {
            return modeState;
        }
    };
    const mode = (modeState === 'device' && prefersDarkMode || modeState === 'dark') ? 'dark' : 'light';
    const cTheme: Theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                    ...getCPalette(mode),
                    neutral: {
                        main: '#64748B',
                        contrastText: '#fff',
                    },
                },
                typography: getCTypography(mode),
            }),
        [mode],
    );

    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null :
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={cTheme}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <CookiesProvider>
                                <Component {...pageProps} />
                            </CookiesProvider>
                        </LocalizationProvider>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            }
        </div>
    );
}

export default CustomApp;