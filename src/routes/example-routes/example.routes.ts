import { Routes } from '../../config/router.config';
import { ExampleController } from '../../controllers/example.controller';

export class ExampleRoutes extends Routes {
	constructor(_path: string) {
		super(_path);
	}

	/**
	 * function for loading routes
	 *
	 * @memberof ExampleRoutes
	 */
	public routes(): void {
		this.router.get(`${this.path}/`, ExampleController.getExample);
    }
}
