import { IAppRouteMoudles } from './../interfaces/config/app.interface';
import { exampleRouteGroup } from './example-routes/example.group';

export const AppRouter: IAppRouteMoudles[] = [
	{
		name: 'exampleModule',
		modulePrefix: 'example-services',
		module: exampleRouteGroup
	}
];
