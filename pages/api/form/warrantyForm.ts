import type {NextApiHandler} from 'next'
import {v4 as uuid4} from 'uuid';
import {CustomerDetail} from "../../../interface/WarrantyForm";
import {connectToDatabase} from "../../../lib/mongodb";

const warrantyHandler: NextApiHandler = async (request, response) => {
    if (request.method === 'POST') {
        let applicationNumber = uuid4().toUpperCase();
        let customerDetail: CustomerDetail = request.body
        if (customerDetail && customerDetail.firstName && customerDetail.lastName &&
            customerDetail.address1 && customerDetail.city && customerDetail.zip &&
            customerDetail.country && customerDetail.dateOfPurchase && customerDetail.purchasedFrom &&
            customerDetail.firstName != '' && customerDetail.lastName !== '' &&
            customerDetail.address1 !== '' && customerDetail.city !== '' &&
            customerDetail.zip !== '' && customerDetail.country !== '' &&
            customerDetail.dateOfPurchase !== null && customerDetail.purchasedFrom !== '') {
            try {
                let {db} = await connectToDatabase();
                let applicationCount: number = await db
                    .collection('warranty_form')
                    .countDocuments({applicationNumber: applicationNumber});
                if (applicationCount === 0) {
                    customerDetail.dateOfPurchase = new Date(customerDetail.dateOfPurchase);
                    let {acknowledged} = await db
                        .collection('warranty_form')
                        .insertOne({
                            applicationNumber: applicationNumber,
                            ...customerDetail,
                            createDtm: new Date(),
                        });
                    if (acknowledged) {
                        return response.json({
                            applicationNumber: applicationNumber,
                            success: acknowledged,
                        });
                    }
                }
                return response.status(200).json({errorMsg: 'Please try again later.'})
            } catch (error) {
                return response.status(200).json({errorMsg: 'Unexpected error.'})
            }
        } else {
            return response.status(200).json({errorMsg: 'Validation error.'})
        }
    } else {
        return response.status(200).json({errorMsg: 'Invalid request.'})
    }
}

export default warrantyHandler