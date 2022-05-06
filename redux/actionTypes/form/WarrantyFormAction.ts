import {warrantyFormSlice} from "../../features/form/warrantyFormReducer";

const prefix = warrantyFormSlice.name + '/';

const warrantyFormAction = {
    SUBMIT_FORM: {
        type: prefix + 'submitForm',
    },
    SUBMIT_SUCCESS: {
        type: warrantyFormSlice.actions.submitSuccess.type,
    },
    SUBMIT_ERROR: {
        type: warrantyFormSlice.actions.submitError.type,
    },
    CATCH_ERROR: {
        type: warrantyFormSlice.actions.catchError.type,
    }
};
export default warrantyFormAction;