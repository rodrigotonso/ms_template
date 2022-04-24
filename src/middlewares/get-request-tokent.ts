import { Request } from 'express';
import { IAppTokenDto } from '../interfaces/config/app.interface';
import JwtDecode from 'jwt-decode';

export /**
 * get token to request
 *
 * @param {Request} req
 * @returns {Promise<string>}
 */
const getTokenRequest = async (req: Request): Promise<any> => {
	let token = null;
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') token = req.headers.authorization.split(' ')[1];
	else if (req.query && req.query.token) token = req.query.token;
	return token;
};

export /**
 * get token to request
 *
 * @param {Request} req
 * @returns {Promise<string>}
 */
const getTokenRequestFromString = async (authorization: string): Promise<any> => {
	let token = null;
	if (authorization && authorization.split(' ')[0] === 'Bearer') token = authorization.split(' ')[1];
	return token;
};

export const getTokenDecoded = async (req: Request): Promise<IAppTokenDto> => {
	const obj = { id: 0, email: '', iat: 0, exp: 0 };
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		const token = req.headers.authorization.split(' ')[1];
		const decodedTokenPayload = JwtDecode<IAppTokenDto>(token);
		obj.id = decodedTokenPayload.id;
		obj.email = decodedTokenPayload.email;
		obj.iat = decodedTokenPayload.iat;
		obj.exp = decodedTokenPayload.exp;
	}
	return obj;
};

export const getTokenDecodedFromObj = async (req: any): Promise<IAppTokenDto> => {
	const obj = { id: 0, email: '', iat: 0, exp: 0 };
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		const token = req.headers.authorization.split(' ')[1];
		const decodedTokenPayload = JwtDecode<IAppTokenDto>(token);
		obj.id = decodedTokenPayload.id;
		obj.email = decodedTokenPayload.email;
		obj.iat = decodedTokenPayload.iat;
		obj.exp = decodedTokenPayload.exp;
	}
	return obj;
};