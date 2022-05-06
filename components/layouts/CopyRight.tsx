import {Link, Typography} from "@mui/material";

export const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'© '}
            <Link color="inherit" href="#">
                wilson
            </Link>
            {' '}
            {new Date().getFullYear()}
            {' '}
            {'All Rights Reserved'}
        </Typography>
    );
}