import type {NextApiHandler} from 'next'
import {connectToDatabase} from "../../../lib/mongodb";
import {checkAuthorization} from "../../../lib/authentication";

const warrantyHandler: NextApiHandler = async (request, response) => {
    if (request.method === 'GET') {
        try {
            if (checkAuthorization(request, response)) {
                let {db} = await connectToDatabase();
                let applicationList = await db
                    .collection('warranty_form')
                    .find()
                    .sort({createDtm: -1})
                    .limit(10)
                    .toArray();
                return response.status(200).json({
                    overviewModel: JSON.parse(JSON.stringify(applicationList)),
                    success: true,
                });
            } else {
                return response.status(401).json({errorMsg: 'Unauthorized.'})
            }
        } catch (error) {
            return response.status(200).json({errorMsg: 'Unexpected error.'})
        }
    } else {
        return response.status(200).json({errorMsg: 'Invalid request.'})
    }

}

export default warrantyHandler