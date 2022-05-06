import {all, fork} from "@redux-saga/core/effects";
import userSaga from "./userSaga";
import warrantyFormSaga from "./warrantyFormSaga";

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(warrantyFormSaga),
    ])
}