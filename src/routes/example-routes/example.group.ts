import { IAppGroupRoutes } from '../../interfaces/config/app.interface';
import { ExampleRoutes } from './example.routes';

export const exampleRouteGroup: IAppGroupRoutes[] = [
	{
		name: 'example',
		routes: [
			new ExampleRoutes('/example')
        ]
	}
];
