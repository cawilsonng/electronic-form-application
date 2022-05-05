import {PaletteOptions} from "@mui/material";
import {darkModePalette} from "./darkModePalette";
import {lightModePalette} from "./lightModePalette";

const getCPalette = (mode: string): PaletteOptions => {
    return mode === 'light' ? lightModePalette : darkModePalette;
}
export default getCPalette;

declare module '@mui/material/styles/createTheme' {
    interface Theme {
        // status: {
        //     danger: React.CSSProperties['color'];
        // };
    }

    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }

    interface ThemeOptions {
        // status: {
        //     danger: React.CSSProperties['color'];
        // },
    }
}

declare module '@mui/material/styles/createPalette' {
    interface Palette {
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        neutral: PaletteOptions['primary'];

    }
}