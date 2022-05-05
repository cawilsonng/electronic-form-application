import {combineReducers} from 'redux';
import userReducer from "../features/dashboard/userReducer";
import warrantyFormReducer from "../features/dashboard/warrantyFormReducer";

const reducer = combineReducers({
    userReducer,
    warrantyFormReducer,
});

export default reducer;
