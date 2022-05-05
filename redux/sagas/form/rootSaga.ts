import {all, fork} from "@redux-saga/core/effects";
import warrantyFormSaga from "./warrantyFormSaga";

export default function* rootSaga() {
    yield all([
        fork(warrantyFormSaga),
    ])
}