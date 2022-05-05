import {warrantyFormSlice} from "../../features/dashboard/warrantyFormReducer";

const prefix = warrantyFormSlice.name + '/';

const warrantyFormAction = {
    GET_OVERVIEW: {
        type: prefix + 'getOverview',
    },
    GET_OVERVIEW_SUCCESS: {
        type: warrantyFormSlice.actions.getOverviewSuccess.type,
    },
    CATCH_ERROR: {
        type: warrantyFormSlice.actions.catchError.type,
    }
};
export default warrantyFormAction;