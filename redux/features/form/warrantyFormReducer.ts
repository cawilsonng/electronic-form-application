import {createSlice} from '@reduxjs/toolkit'
import {SubmitFormErrorModel} from "../../service/form/WarrantyFormService";

export const warrantyFormSlice = createSlice({
    name: 'warrantyForm',
    initialState: {
        isSubmitted: false,
        applicationNumber: "",
        errorMsg: '',
    },
    reducers: {
        submitSuccess: (state, {payload}) => {
            state.isSubmitted = true;
            state.applicationNumber = payload;
        },
        submitError: (state, {payload}) => {
            const submitFormErrorModel: SubmitFormErrorModel = payload;
            state.errorMsg = submitFormErrorModel.errorMsg;
        },
        catchError: (state) => {
            state.errorMsg = 'Unexpected error.Please try again later.';
        },
    }
})

export default warrantyFormSlice.reducer