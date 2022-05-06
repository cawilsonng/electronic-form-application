import {NextApiRequest, NextApiResponse} from "next";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const jwt = require('jsonwebtoken');

if (!ACCESS_TOKEN_SECRET) {
    throw new Error('Define the ACCESS_TOKEN_SECRET environmental variable');
}

if (!REFRESH_TOKEN_SECRET) {
    throw new Error('Define the REFRESH_TOKEN_SECRET environmental variable');
}
export const generateJwt = (userName: string) => {
    const JwtPair = {
        accessToken: jwt.sign({userName: userName}, ACCESS_TOKEN_SECRET, {expiresIn: 1800}),
        refreshToken: jwt.sign({userName: userName}, REFRESH_TOKEN_SECRET, {expiresIn: 7200}),
    }
    return JwtPair;
}

export const validAccessToken = (accessToken: string) => {
    try {
        return jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    } catch (err) {
        return false;
    }
}

export const validRefreshToken = (refreshToken: string) => {
    try {
        return jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    } catch (err) {
        return false;
    }
}

export const checkAuthorization = (request: NextApiRequest, response: NextApiResponse) => {
    try {
        if (!request.headers.authorization || request.headers.authorization.indexOf('Bearer ') === -1) {
            return false;
        }
        const accessToken = request.headers.authorization.split(' ')[1];
        return validAccessToken(accessToken);
    } catch (e) {
        return false;
    }
}
