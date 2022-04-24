import { Request, Response } from 'express';
import { ExampleServices } from '../services/example.services';
import { logger } from '../lib/logger';

export class ExampleController {
	/**
	 * GET EXAMPLE
	 *
	 * @static
	 * @param {Request} req
	 * @param {Response} res
	 * @return {Promise<void>}
	 * @memberof ExampleController
	 */
	public static async getExample(req: Request, res: Response): Promise<void> {
		try {
			const example = await ExampleServices.getExample()
			logger.debug(`ExampleController.getExample ${example}`);
			res.status(200).json(example);
		} catch (error) {
			logger.error(`ExampleController.getExample ${error}`);
			res.status(500).json(error);
		}
	}
}
