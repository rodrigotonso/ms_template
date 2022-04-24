import { AxiosRequestConfig } from 'axios';
import { logger } from '../lib/logger';

import { AUTHORIZATION_SERVICE, SETTING_SERVICE } from '../config/environments.config';

export const AuthServicesConfig: AxiosRequestConfig = {
	baseURL: AUTHORIZATION_SERVICE,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
		authorization: ''
	}
};

export const SettingServicesConfig: AxiosRequestConfig = {
	baseURL: SETTING_SERVICE,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
		authorization: ''
	}
}

logger.debug(`AuthServiceConfig -> ${AuthServicesConfig.baseURL}`);
logger.debug(`SettingServicesConfig -> ${SettingServicesConfig.baseURL}`);