import React from 'react';
import {Alert, Avatar, Box, Button, CssBaseline, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import Page from "../../page";
import {Copyright} from "../../layouts/CopyRight";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/dashboardHooks";
import {LoginErrorModel, LoginModel} from "../../../redux/service/dashboard/UserService";
import createAction from "../../../redux/actionTypes/Action";
import UserAction from "../../../redux/actionTypes/dashboard/UserAction";

export const LoginPage = (props: any) => {
    const userState = useAppSelector(state => state.userReducer)
    const disPatch = useAppDispatch();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data && data.get('username') && data.get('password')) {
            const loginModel: LoginModel = {
                userName: data.get('username') as string,
                encPassword: data.get('password') as string,
            }
            disPatch(createAction(UserAction.LOGIN, loginModel));
        } else {
            const loginErrorModel: LoginErrorModel = {
                errorMsg: "Invalid input.",
            }
            disPatch(createAction(UserAction.LOGIN_ERROR, loginErrorModel));
        }
    };

    const handleForgotPassword = () => {
        props.history.push({
            pathname: "/admin/forgot",
        });
    };

    return (
        <Page title="Login">
            <Grid container justifyContent="center" alignItems="center"
                  sx={{
                      height: '100vh', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', backgroundColor: 'background.default',
                      flexGlow: 1,
                  }}
                  spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={4} sm={6} md={6} sx={{maxWidth: '500px !important'}}>
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
                        <Typography mt={1} component="h4" variant="h4">
                            Welcome back
                        </Typography>
                        <Typography component="h6" variant="h6">
                            CMS panel
                        </Typography>
                        <Box component="form" onSubmit={handleLogin} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {userState.errorMsg === '' ? '' :
                                <Alert severity="error">{userState.errorMsg}</Alert>}
                            <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link onClick={handleForgotPassword} variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{
                            mt: 1,
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <Copyright/>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Page>
    );
};