import {createSlice} from '@reduxjs/toolkit'

export const warrantyFormSlice = createSlice({
    name: 'warrantyForm',
    initialState: {
        overviewModel: [],
        errorMsg: '',
    },
    reducers: {
        getOverviewSuccess: (state, {payload}) => {
            state.overviewModel = payload;
            state.errorMsg = '';
        },

        catchError: (state) => {
            state.errorMsg = 'Unexpected error.Please try again later.';
        },
    }
})

export default warrantyFormSlice.reducer