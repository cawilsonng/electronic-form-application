import {all, call, takeLatest} from "redux-saga/effects";
import {fork, put} from "@redux-saga/core/effects";
import WarrantyFormService, {SubmitFormErrorModel, WarrantyFormModel} from "../../service/form/WarrantyFormService";
import WarrantyFormAction from "../../actionTypes/form/WarrantyFormAction";
import createAction from "../../actionTypes/Action";
import {AxiosResponse} from "axios";

function* submitForm(data: any) {
    try {
        const warrantyFormModel: WarrantyFormModel = data.payload;
        const result: AxiosResponse = yield call(WarrantyFormService.submitForm, warrantyFormModel);
        if (result.status === 200) {
            if (result.data.applicationNumber) {
                yield put(createAction(WarrantyFormAction.SUBMIT_SUCCESS, result.data.applicationNumber));
            } else {
                const submitFormErrorModel: SubmitFormErrorModel = {
                    errorMsg: result.data.errorMsg,
                }
                yield put(createAction(WarrantyFormAction.SUBMIT_ERROR, submitFormErrorModel));
            }
        } else {
            yield put(WarrantyFormAction.CATCH_ERROR);
        }
    } catch (error) {
        const submitFormErrorModel: SubmitFormErrorModel = {
            errorMsg: "Server error. Please try again later",
        }
        yield put(createAction(WarrantyFormAction.SUBMIT_ERROR, submitFormErrorModel));
    }
}

function* submitFormSaga() {
    yield takeLatest(WarrantyFormAction.SUBMIT_FORM.type, submitForm);
}


export default function* warrantyFormSaga() {
    yield all([
        fork(submitFormSaga),
    ]);
}
