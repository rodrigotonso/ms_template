import { IAppConfig } from '../interfaces/config/app.interface';
import { HOST, PORT, API_PREFIX, API_VERSION, MICROSERVICE } from '../config/environments.config';

export const AppConfig: IAppConfig = {
	host: HOST,
	port: PORT,
	apiPrefix: API_PREFIX,
	apiVersion: API_VERSION,
	microservice: MICROSERVICE
};
