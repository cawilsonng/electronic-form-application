import React from 'react';
import {ColorModeContext} from "../../../pages/_app";
import {Copyright} from "../CopyRight";
import {
    AccountCircle,
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
    Dashboard as DashboardIcon,
    Logout as LogoutIcon,
    Menu as MenuIcon,
    MoreVert as MoreIcon,
} from '@mui/icons-material';
import {Link as RouterLink, LinkProps as RouterLinkProps, useHistory,} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/dashboardHooks";
import UserAction from "../../../redux/actionTypes/dashboard/UserAction";
import {
    AppBar,
    Avatar,
    Box,
    CssBaseline,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";

interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
}

function ListItemLink(props: ListItemLinkProps) {
    const {icon, primary, to} = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
                itemProps,
                ref,
            ) {
                return <RouterLink to={to} ref={ref} {...itemProps} role={undefined}/>;
            }),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary}/>
            </ListItem>
        </li>
    );
}

export const Dashboard = (props: any) => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const dispatch = useAppDispatch();
    const userState = useAppSelector(state => state.userReducer)
    const history = useHistory();

    const [state, setState] = React.useState({
        leftDrawer: false,
    });

    const toggleLeftDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({...state, 'leftDrawer': open});
            };


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        dispatch(UserAction.LOGOUT);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                <Avatar sx={{mr: 2}}/> Wilson
            </MenuItem>
            <Divider/>
            <MenuItem onClick={handleLogout}><ListItemIcon>
                <LogoutIcon fontSize="small"/>
            </ListItemIcon>Logout</MenuItem>
            <MenuItem onClick={colorMode.toggleColorMode}>
                <ListItemIcon>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon fontSize="small"/> :
                        <Brightness4Icon fontSize="small"/>}
                </ListItemIcon>Appearance: {colorMode.getCurrentMode() === 'device' ? 'Device' : colorMode.getCurrentMode() === 'light' ? 'Light' : 'Dark'}
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Avatar sx={{mr: 2}}/> Wilson
            </MenuItem>
            <Divider/>
            <MenuItem onClick={handleLogout}><ListItemIcon>
                <LogoutIcon fontSize="small"/>
            </ListItemIcon>Logout</MenuItem>
            <MenuItem onClick={colorMode.toggleColorMode}>
                <ListItemIcon>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon fontSize="small"/> :
                        <Brightness4Icon fontSize="small"/>}
                </ListItemIcon>Appearance: {colorMode.getCurrentMode() === 'device' ? 'Device' : colorMode.getCurrentMode() === 'light' ? 'Light' : 'Dark'}
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        }}>
            <CssBaseline/>
            <Box sx={{
                flexGrow: 1,
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}>
                <AppBar position="static" color="primary" enableColorOnDark>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                            onClick={toggleLeftDrawer(!state.leftDrawer)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block'}}}
                        >
                            Dashboard
                        </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Box>
                        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit">
                                <MoreIcon/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <SwipeableDrawer
                    anchor='left'
                    open={state['leftDrawer']}
                    onClose={toggleLeftDrawer(false)}
                    onOpen={toggleLeftDrawer(true)}
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {width: 240, boxSizing: 'border-box'},
                    }}
                >
                    <Toolbar/>
                    <Box sx={{overflow: 'auto'}}>
                        <List>
                            <ListItemLink to="./dashboard" primary="Overview" icon={<DashboardIcon/>}/>
                        </List>
                    </Box>
                </SwipeableDrawer>
                {props.children}
                <Copyright/>
            </Box>
        </Box>
    );
};