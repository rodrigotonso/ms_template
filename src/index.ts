import dotenv from 'dotenv';
if (process.cwd() == '/app') {
	dotenv.config({ path: '/environment/config.map' });
} else {
	dotenv.config();
}

import App from './app';
import { AppConfig } from './config/app.config';
import { AppRouter } from './routes/router';
import { AppMiddleWares } from './middleware';
import { logger } from './lib/logger';

class Index {
	app: App;

	constructor() {
		this.app = new App({
			appUrl: AppConfig.host,
			apiPrefix: AppConfig.apiPrefix,
			apiVersion: AppConfig.apiVersion,
			middleWares: AppMiddleWares,
			port: AppConfig.port,
			routes: AppRouter,
			logger: logger
		});
		this.main();
	}

	/**
	 * initial function
	 *
	 * @protected
	 * @memberof Index
	 */
	protected main(): void {
		this.app.listen();
	}
}

new Index();
