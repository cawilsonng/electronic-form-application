import React from 'react';
import {Avatar, Box, Button, CssBaseline, Grid, Paper, TextField, Typography} from "@mui/material";
import {Copyright, LockOutlined} from "@mui/icons-material";
import Page from "../../page";

export const ForgotPasswordPage = (props: any) => {
    const handleRecovery = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // // eslint-disable-next-line no-console
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
        props.history.push({
            pathname: "/admin/login",
        });
    };

    return (
        <Page title="Forgot password">
            <Grid container justifyContent="center" alignItems="center"
                  sx={{
                      height: '100vh', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', backgroundColor: 'background.default',
                  }}
                  spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={4} sm={6} md={4}>
                    <CssBaseline/>
                    <Paper elevation={2} sx={{
                        pt: 4,
                        pb: 1,
                        px: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'background.paper',
                    }}>
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlined/>
                        </Avatar>
                        <Typography mt={1} component="h6" variant="h6">
                            Find your account
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            Enter your recovery email
                        </Typography>
                        <Box component="form" onSubmit={handleRecovery} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="remember" color="primary"/>}*/}
                            {/*    label="Remember me"*/}
                            {/*/>*/}
                            <Button type="submit" fullWidth variant="contained" sx={{mt: 2, mb: 2}}>
                                Recovery
                            </Button>
                        </Box>
                        <Box sx={{
                            mt: 4,
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <Copyright sx={{my: 1, mr: 1}}/>
                            <Typography my={1} variant="caption" display="block" gutterBottom>
                                2022 Wilson All Rights Reserved
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Page>
    );
};