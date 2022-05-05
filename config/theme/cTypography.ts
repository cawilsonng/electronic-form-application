import getCPalette from './cTheme';
import {TypographyOptions} from "@mui/material/styles/createTypography";

const getCTypography = (mode: string): TypographyOptions => {
    return {
        // h1: {
        //     color: getCPalette(mode).text?.primary,
        //     fontWeight: 500,
        //     fontSize: '35px',
        //     letterSpacing: '-0.24px',
        //     lineHeight: '40px'
        // },
        // h2: {
        //     color: getCPalette(mode).text?.primary,
        //     fontWeight: 500,
        //     fontSize: '29px',
        //     letterSpacing: '-0.24px',
        //     lineHeight: '32px'
        // },
        // h3: {
        //     color: getCPalette(mode).text?.primary,
        //     fontWeight: 500,
        //     fontSize: '24px',
        //     letterSpacing: '-0.06px',
        //     lineHeight: '28px'
        // },
        // h4: {
        //     color: getCPalette(mode).text?.primary,
        //     fontWeight: 500,
        //     fontSize: '20px',
        //     letterSpacing: '-0.06px',
        //     lineHeight: '24px'
        // },
        // h5: {
        //     color: getCPalette(mode).text?.primary,
        //     fontWeight: 500,
        //     fontSize: '16px',
        //     letterSpacing: '-0.05px',
        //     lineHeight: '20px'
        // },
        // h6: {
        //     color: getCPalette(mode).text?.primary,
        //     fontWeight: 500,
        //     fontSize: '14px',
        //     letterSpacing: '-0.05px',
        //     lineHeight: '20px'
        // },
        // subtitle1: {
        //     color: getCPalette(mode).text?.primary,
        //     fontSize: '16px',
        //     letterSpacing: '-0.05px',
        //     lineHeight: '25px'
        // },
        // subtitle2: {
        //     color: getCPalette(mode).text?.secondary,
        //     fontWeight: 400,
        //     fontSize: '14px',
        //     letterSpacing: '-0.05px',
        //     lineHeight: '21px'
        // },
        // body1: {
        //     color: getCPalette(mode).text?.primary,
        //     fontSize: '14px',
        //     letterSpacing: '-0.05px',
        //     lineHeight: '21px'
        // },
        // body2: {
        //     color: getCPalette(mode).text?.secondary,
        //     fontSize: '12px',
        //     letterSpacing: '-0.04px',
        //     lineHeight: '18px'
        // },
        // button: {
        //     color: getCPalette(mode).text?.primary,
        //     fontSize: '14px'
        // },
        // caption: {
        //     color: getCPalette(mode).text?.secondary,
        //     fontSize: '11px',
        //     letterSpacing: '0.33px',
        //     lineHeight: '13px'
        // },
        // overline: {
        //     color: getCPalette(mode).text?.secondary,
        //     fontSize: '11px',
        //     fontWeight: 500,
        //     letterSpacing: '0.33px',
        //     lineHeight: '13px',
        //     textTransform: 'uppercase'
        // },
        fontFamily: 'Open Sans',
    }
};
export default getCTypography;