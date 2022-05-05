import {all, call, takeLatest} from "redux-saga/effects";
import {fork, put} from "@redux-saga/core/effects";
import WarrantyFormService from "../../service/dashboard/WarrantyFormService";
import WarrantyFormAction from "../../actionTypes/dashboard/WarrantyFormAction";
import createAction from "../../actionTypes/Action";
import {AxiosResponse} from "axios";
import {ErrorModel} from "../../../interface/ErrorModel";
import UserAction from "../../actionTypes/dashboard/UserAction";

function* getOverview(data: any) {
    try {
        const {payload} = data;
        const result: AxiosResponse = yield call(WarrantyFormService.getOverview, payload);
        if (result.status === 200) {
            if (result.data.success) {
                yield put(createAction(WarrantyFormAction.GET_OVERVIEW_SUCCESS, result.data.overviewModel));
            } else {
                const errorModel: ErrorModel = {
                    errorMsg: result.data.errorMsg,
                }
                yield put(createAction(WarrantyFormAction.CATCH_ERROR, errorModel));
            }
        } else if (result.status === 401) {
            yield put(UserAction.LOGOUT);
        } else {
            yield put(WarrantyFormAction.CATCH_ERROR);
        }
    } catch (error) {
        const errorModel: ErrorModel = {
            errorMsg: "Server error. Please try again later",
        }
        yield put(createAction(WarrantyFormAction.CATCH_ERROR, errorModel));
    }
}

function* getOverviewSaga() {
    yield takeLatest(WarrantyFormAction.GET_OVERVIEW.type, getOverview);
}

export default function* warrantyFormSaga() {
    yield all([
        fork(getOverviewSaga),
    ]);
}
