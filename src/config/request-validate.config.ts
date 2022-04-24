import { validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export /**
 *  function that validates if all the required fields were sent in the request
 *
 * @param {ValidationChain[]} validations
 */
const requestValidate = (validations: ValidationChain[]) => async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	await Promise.all(validations.map(validation => validation.run(req)));
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(422).json({ errors: errors.array() });
	} else {
		next();
	}
};
