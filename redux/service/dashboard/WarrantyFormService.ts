import axios from 'axios';
import {CustomerDetail} from "../../../interface/WarrantyForm";

export type WarrantyFormModel = CustomerDetail;


const getOverview = async (accessToken: string) => {
    try {
        return await axios.get('/api/admin/warrantyForm', {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            }
        });
    } catch ({response}) {
        return response;
    }
}

const WarrantyFormService = {
    getOverview: getOverview,
};

export default WarrantyFormService;