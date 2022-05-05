import {createSlice} from '@reduxjs/toolkit'
import {LoginErrorModel} from "../../service/dashboard/UserService";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isValid: false,
        errorMsg: '',
        accessToken: '',
        refreshToken: '',
    },
    reducers: {
        loginSuccess: (state, {payload}) => {
            state.isValid = true;
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
            state.errorMsg = '';
        },
        logoutSuccess: (state) => {
            state.isValid = false;
            state.accessToken = '';
            state.refreshToken = '';
            state.errorMsg = '';
        },
        loginError: (state, {payload}) => {
            const loginErrorModel: LoginErrorModel = payload;
            state.errorMsg = loginErrorModel.errorMsg;
        },
        refreshTokenSuccess: (state, {payload}) => {
            state.isValid = true;
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
            state.errorMsg = '';
        },
    }
})

export default userSlice.reducer