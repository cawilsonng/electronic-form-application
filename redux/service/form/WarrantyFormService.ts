import axios from 'axios';
import {CustomerDetail} from "../../../interface/WarrantyForm";

export type WarrantyFormModel = CustomerDetail;

export type SubmitFormErrorModel = {
    errorMsg: string,
}

const submitForm = (warrantyFormModel: WarrantyFormModel) => {
    return axios.post('/api/form/warrantyForm', warrantyFormModel);
};

const getOverview = () => {
    return axios.get('/api/admin/warrantyForm');
}

const WarrantyFormService = {
    submitForm: submitForm,
    getOverview: getOverview,
};

export default WarrantyFormService;