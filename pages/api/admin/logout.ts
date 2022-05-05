import type {NextApiHandler} from 'next'

const logoutHandler: NextApiHandler = async (request, response) => {
    if (request.method === 'POST') {
        try {
            return response.status(200).json({
                success: true,
            });
        } catch (error) {
            return response.status(200).json({errorMsg: 'Unexpected error.'})
        }
    } else {
        return response.status(200).json({errorMsg: 'Invalid request.'})
    }

}

export default logoutHandler