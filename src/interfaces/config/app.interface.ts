import { Logger } from 'winston';

/**
 * interface that validates the parameters for the start of application.
 *
 * @export
 * @interface IAppInit
 */
export interface IAppInit {
	appUrl: string;
	apiPrefix: string;
	apiVersion: number;
	middleWares: any[];
	port: number;
	routes: IAppRouteMoudles[];
	logger: Logger;
}

/**
 * interface that validates the initial configuration parameters for the application
 *
 * @export
 * @interface IAppConfig
 */
export interface IAppConfig {
	host: string;
	port: number;
	apiPrefix: string;
	apiVersion: number;
	microservice: string;
}

/**
 * interface that validates the parameters for the initialization of the application paths
 *
 * @export
 * @interface IAppRoutes
 */
export interface IAppRoutes {
	nameGroups: string;
	routeGroups: any[];
	middlewares?: any[];
	routePrefix?: string;
}

/**
 * interface that validate the parameters for group of routes
 *
 * @export
 * @interface IAppGroupRoutes
 */
export interface IAppGroupRoutes {
	name: string;
	routes: any[];
	middlewares?: any[];
	prefix?: string;
}

/**
 * interface that validate the parameters for module of routes
 *
 * @export
 * @interface IAppRouteMoudles
 */
export interface IAppRouteMoudles {
	name: string;
	modulePrefix?: string;
	module: IAppGroupRoutes[];
}

export interface MulterFile {
	key: string; // Available using `S3`.
	path: string; // Available using `DiskStorage`.
	mimetype: string;
	originalname: string;
	size: number;
}

/**
 * Interface JWT DATA
 *
 * @export
 * @interface IAppTokenDto
 */
export interface IAppTokenDto {
	id: number;
	email: string;
	exp: number;
	iat: number;
}