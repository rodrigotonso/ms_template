import * as express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { requireJsonContent } from './middlewares/require-json.middleware';
import requestIp from 'request-ip';
import { setUniqueId } from './middlewares/logger-id.middleware';
import httpContext from 'express-http-context';

export const AppMiddleWares = [
	cors(),
	helmet.xssFilter(),
	helmet.frameguard(),
	express.json(),
	express.urlencoded({ extended: false }),
	requireJsonContent,
	requestIp.mw(),
	httpContext.middleware,
	setUniqueId
];
