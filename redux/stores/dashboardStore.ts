import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/dashboardReducers";
import rootSaga from "../sagas/dashboard/rootSaga";
import {configureStore} from "@reduxjs/toolkit";

const initDashboardStore: any = () => {
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

export default initDashboardStore();

export type RootState = ReturnType<typeof initDashboardStore.getState>;
export type AppDispatch = typeof initDashboardStore.dispatch;