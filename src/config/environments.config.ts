// ENVIRONMENTS SERVICE
export const HOST = process.env.HOST ? process.env.HOST : 'http://localhost';
export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const API_PREFIX = process.env.API_PREFIX ? process.env.API_PREFIX : 'api';
export const API_VERSION = process.env.API_VERSION ? parseInt(process.env.API_VERSION) : 1;
export const MICROSERVICE = process.env.MICROSERVICE || 'tournaments';

// --- AUTH EXCEPTION: true / false
export const AUTH_IP_EXCEPTION = process.env.AUTH_IP_EXCEPTION;

// --- AUTH URL TO VALIDATE JWT
export const AUTHORIZATION_SERVICE = process.env.AUTHORIZATION_SERVICE;
export const USER_SERVICE = process.env.USER_SERVICE;
export const SETTING_SERVICE = process.env.SETTING_SERVICE;

// --- AUTH EXCEPTION URL FROM REQUEST
export const CORE_SERVICE = process.env.CORE_SERVICE || 'http://localhost:3000';
export const CORE_MODULE_URL = process.env.CORE_MODULE_URL || 'http://localhost:8000';

// --- SOCKET EMMIT
export const SOCKET_ENDPOINT = process.env.SOCKET_ENDPOINT || 'http://200.110.137.84:1113';
export const SOCKET_TARGET = process.env.SOCKET_TARGET || 'tg-v2';
