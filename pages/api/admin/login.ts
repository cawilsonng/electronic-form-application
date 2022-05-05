import type {NextApiHandler} from 'next'
import {connectToDatabase} from "../../../lib/mongodb";
import {LoginModel} from "../../../redux/service/dashboard/UserService";
import {generateJwt} from "../../../lib/authentication";

let bcrypt = require('bcryptjs');

const loginHandler: NextApiHandler = async (request, response) => {
    if (request.method === 'POST') {
        try {
            const loginModel: LoginModel = request.body;
            let {db} = await connectToDatabase();
            let userCount = await db
                .collection('user')
                .countDocuments({
                    username: loginModel.userName,
                    password: loginModel.encPassword,
                })

            let user = await db
                .collection('user')
                .findOne({
                    username: loginModel.userName,
                })
            if (user && user.password && bcrypt.compareSync(loginModel.encPassword, user.password)) {
                const {accessToken, refreshToken} = generateJwt(loginModel.userName);
                return response.status(200).json({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    success: true,
                });
            } else {
                return response.status(200).json({
                    errorMsg: "User does not exist or password mismatch.",
                    success: false,
                });
            }
        } catch (error) {
            return response.status(200).json({errorMsg: 'Unexpected error.'})
        }
    } else {
        return response.status(200).json({errorMsg: 'Invalid request.'})
    }

}

export default loginHandler