import axios from 'axios';

export type LoginModel = {
    userName: string,
    encPassword: string,
}

export type LoginErrorModel = {
    errorMsg: string,
}

const login = (loginModel: LoginModel) => {
    return axios.post('/api/admin/login', loginModel);
};
export type LogoutModel = {
    session: string,
}
const logout = (logoutModel: LogoutModel) => {
    return axios.post('/api/admin/logout', logoutModel);
};

const refreshToken = (refreshToken: string) => {
    return axios.post('/api/admin/refreshToken', {refreshToken: refreshToken});
};

const UserService = {
    login: login,
    logout: logout,
    refreshToken: refreshToken,
};

export default UserService;