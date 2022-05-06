import {PaletteOptions} from "@mui/material";

export const darkModePalette: PaletteOptions = {
    primary: {
        main: '#427b7b',
    },
    secondary: {
        main: '#a579c5',
        contrastText: '#ffffff',
    },
    error: {
        main: '#F03E65',
    },
    warning: {
        main: '#F06F26',
    },
    info: {
        main: '#3E97F0',
    },
    success: {
        main: '#5BBF7E',
    },
    text: {
        primary: '#F9FAFC',
        secondary: 'rgba(249,250,252,0.7)',
        disabled: 'rgba(249,255,255,0.5)',
    },
    background: {
        default: '#272626',
        paper: '#2d2d2d',
    },
    neutral: {
        main: '#64748B',
        contrastText: '#FFFFFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
};
