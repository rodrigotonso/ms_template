interface IAuthException {
	name: string;
	url: string;
}
import { CORE_SERVICE } from '../config/environments.config';

export const authException: IAuthException[] = [
	{
		name: 'core',
		url: CORE_SERVICE
	}
];
