import {userSlice} from "../../features/dashboard/userReducer";

const prefix = userSlice.name + '/';

const UserAction = {
    LOGIN: {
        type: prefix + 'login',
    },
    LOGIN_SUCCESS: {
        type: prefix + 'loginSuccess',
    },
    LOGIN_ERROR: {
        type: userSlice.actions.loginError.type,
    },
    LOGOUT: {
        type: prefix + 'logout',
    },
    LOGOUT_SUCCESS: {
        type: userSlice.actions.logoutSuccess.type,
    },
    CATCH_ERROR: {
        type: prefix + 'catchError',
    },
    REFRESH_TOKEN: {
        type: prefix + 'refreshToken',
    },
    REFRESH_TOKEN_SUCCESS: {
        type: userSlice.actions.refreshTokenSuccess.type,
    },
};
export default UserAction;