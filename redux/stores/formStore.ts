import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/formReducers";
import rootSaga from "../sagas/form/rootSaga";
import {configureStore} from "@reduxjs/toolkit";

const initFormStore: any = () => {
    const sagaMiddleware = createSagaMiddleware();
    let store = configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(sagaMiddleware)
        ,
    });
    sagaMiddleware.run(rootSaga);
    return store;
};

export default initFormStore();

export type RootState = ReturnType<typeof initFormStore.getState>;
export type AppDispatch = typeof initFormStore.dispatch;