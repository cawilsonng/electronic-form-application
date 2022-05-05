import {combineReducers} from 'redux';
import warrantFormReducer from "../features/form/warrantyFormReducer";

const reducer = combineReducers({
    warrantFormReducer,
});

export default reducer;
