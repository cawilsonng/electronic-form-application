import {all, call, takeLatest} from "redux-saga/effects";

import UserAction from "../../actionTypes/dashboard/UserAction";
import {fork, put} from "@redux-saga/core/effects";
import UserService, {LoginErrorModel} from "../../service/dashboard/UserService";
import createAction from "../../actionTypes/Action";
import {AxiosResponse} from "axios";

function* postLogin(data: any) {
    try {
        const loginModel = data.payload;
        const result: AxiosResponse = yield call(UserService.login, loginModel);
        const isSuccess = result.data.success;
        if (isSuccess) {
            yield put(createAction(UserAction.LOGIN_SUCCESS, {
                accessToken: result.data.accessToken,
                refreshToken: result.data.refreshToken
            }));
        } else {
            const loginErrorModel: LoginErrorModel = {
                errorMsg: result.data.errorMsg,
            }
            yield put(createAction(UserAction.LOGIN_ERROR, loginErrorModel));
        }
    } catch (error) {
        console.error(error);
    }
}

function* postLogout(data: any) {
    try {
        const logoutModel = data.payload;
        const result: object = yield call(UserService.logout, logoutModel);
        yield put(UserAction.LOGOUT_SUCCESS);
    } catch (error) {
        console.error(error);
    }
}

function* refreshToken(data: any) {
    try {
        const {payload} = data;
        const result: AxiosResponse = yield call(UserService.refreshToken, payload);
        const isSuccess = result.data.success;
        if (isSuccess) {
            yield put(createAction(UserAction.REFRESH_TOKEN_SUCCESS, {
                accessToken: result.data.accessToken,
                refreshToken: result.data.refreshToken
            }));
        } else {
            yield put(UserAction.LOGOUT_SUCCESS);
        }
    } catch (error) {
        console.error(error);
    }
}

function* loginSaga() {
    yield takeLatest(UserAction.LOGIN.type, postLogin);
}

function* logoutSaga() {
    yield takeLatest(UserAction.LOGOUT.type, postLogout);
}

function* refreshTokenSaga() {
    yield takeLatest(UserAction.REFRESH_TOKEN.type, refreshToken);
}

export default function* userSaga() {
    yield all([
        fork(loginSaga),
        fork(logoutSaga),
        fork(refreshTokenSaga),
    ]);
}
