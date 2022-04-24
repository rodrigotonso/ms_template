import express, { Response, Request } from 'express';
import { Application } from 'express';
import { createConnection, Connection } from 'typeorm';
import { IAppInit, IAppRouteMoudles } from './interfaces/config/app.interface';
import { Logger } from 'winston';
import { logger as log } from './lib/logger';
import { AppConfig } from './config/app.config';

export default class App {
	private app: Application;
	private apiPrefix: string;
	private apiVersion: number;
	private appUrl: string;
	private port: number;
	private logger: Logger;
	public connection!: Connection;

	constructor(appInit: IAppInit) {
		this.app = express();
		this.appUrl = appInit.appUrl;
		this.apiPrefix = appInit.apiPrefix;
		this.apiVersion = appInit.apiVersion;
		this.port = appInit.port;
		this.logger = appInit.logger;

		// this.initializeModels();
		this.middlewares(appInit.middleWares);
		this.routes(appInit.routes);
	}

	/**
	 * initializes the connection to the database
	 *
	 * @private
	 * @returns {Promise<void>}
	 * @memberof App
	 */
	private async initializeModels(): Promise<void> {
		const connection = await createConnection();
		if (connection === undefined) {
			throw new Error('Error connecting to database');
		} // In case the connection failed, the app stops.
		connection.synchronize(); // this updates the database schema to match the models' definitions
		this.connection = connection; // Store the connection object in the class instance.
		log.info(`Microservice ${AppConfig.microservice} is run on port ${this.port}`);
	}

	/**
	 * load all middlewares of the application
	 *
	 * @private
	 * @param {{ forEach: (arg0: (middleWare: any) => void) => void }} middleWares
	 * @memberof App
	 */
	private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }): void {
		middleWares.forEach(middleWare => {
			this.app.use(middleWare);
		});
	}

	/**
	 * load all routes of the application
	 *
	 * @private
	 * @param {IAppRouteMoudles[]} appRoutesModules
	 * @returns {Promise<void>}
	 * @memberof App
	 */
	private async routes(appRoutesModules: IAppRouteMoudles[]): Promise<void> {
		appRoutesModules.forEach(routesModule => {
			const modulePrefix = routesModule.modulePrefix ? routesModule.modulePrefix : '';
			const modules = routesModule.module;
			modules.forEach(group => {
				const middlewares = group.middlewares ? group.middlewares : [];
				const routesList = group.routes;
				const groupPrefix = group.prefix ? group.prefix : '';
				routesList.forEach(route => {
					this.app.use(`/${this.apiPrefix}/v${this.apiVersion}/${modulePrefix}/${groupPrefix}`, middlewares, route.router);
				});
			});
		});

		this.app.all('*', (req: Request, res: Response) => {
			res.status(404).json({ message: 'Not Found' });
		});
	}

	/**
	 * function app listening
	 *
	 * @memberof App
	 */
	public listen(): void {
		this.app.listen(this.port, () => {
			console.log(`App listening on the ${this.appUrl}:${this.port}`);
		});
	}
}
