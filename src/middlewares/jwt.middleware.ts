import requestIp from 'request-ip';
import { Request, Response, NextFunction } from 'express';
import { authException } from '../config/auth-exception.config';
import { authServices } from '../services/api/auth.services';
import { AUTH_IP_EXCEPTION } from '../config/environments.config';

export /**
 * valid token authorization
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
const jwtValidate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const originIp = requestIp.getClientIp(req);
		let exception = false;
		if (AUTH_IP_EXCEPTION && !exception) {
			authException.map(element => {
				if (element.url == originIp && !exception) {
					exception = true;
				}
			});
		}

		if (!exception) {
			const resp = await authServices.authValidate(req);
			if (resp.status != 200) {
				res.status(401).json({ error: 'unauthorized' });
			}
		}

		next();
	} catch (error) {
		res.status(401).json({ error: 'unauthorized' });
	}
};
