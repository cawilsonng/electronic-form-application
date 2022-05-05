import type {NextApiHandler} from 'next'
import {generateJwt, validRefreshToken} from "../../../lib/authentication";

const refreshTokenHandler: NextApiHandler = async (request, response) => {
    if (request.method === 'POST') {
        try {
            const {refreshToken} = request.body;
            if (refreshToken) {
                const payload = validRefreshToken(refreshToken);
                if (payload) {
                    const {accessToken, refreshToken} = generateJwt(payload.userName);
                    return response.status(200).json({
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                        success: true,
                    });
                }
            }
            return response.status(401).json({errorMsg: 'Bad operation.'})
        } catch (error) {
            return response.status(200).json({errorMsg: 'Unexpected error.'})
        }
    } else {
        return response.status(200).json({errorMsg: 'Invalid request.'})
    }
}

export default refreshTokenHandler