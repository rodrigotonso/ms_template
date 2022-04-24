import appRoot from 'app-root-path';
import { createLogger, transports, format } from 'winston';
import httpContext from 'express-http-context';
import { AppConfig } from '../config/app.config';
// import socket from './socket';
const { combine, timestamp, label, printf } = format;
// import { SOCKET_TARGET } from '../config/environments.config';

class LoggerCustom {
	private LOG_FILE_PATH: string;
	private MAX_FILE_SIZE: number;
	private MAX_FILES: number;

	constructor() {
		this.LOG_FILE_PATH = `${appRoot}/logs`;
		this.MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
		this.MAX_FILES = 5;
	}

	public tsFormat = (timestamp: Date) => {
		const nz = (s: number) => (s < 10 ? `0${s}` : `${s}`);
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hour = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		return `${year}-${nz(month)}-${nz(day)} ${nz(hour)}:${nz(minutes)}:${nz(seconds)}`;
	};

	/**
	 * setTransports
	 *
	 * @private
	 * @returns {Array<any>}
	 * @memberof LoggerCustom
	 */
	private setTransports(): Array<any> {
		return [
			new transports.File({
				level: 'info',
				filename: `${this.LOG_FILE_PATH}/info.log`,
				handleExceptions: true,
				maxsize: this.MAX_FILE_SIZE,
				maxFiles: this.MAX_FILES
			}),
			new transports.File({
				level: 'debug',
				filename: `${this.LOG_FILE_PATH}/debug.log`,
				handleExceptions: true,
				maxsize: this.MAX_FILE_SIZE,
				maxFiles: this.MAX_FILES
			}),
			new transports.File({
				level: 'error',
				filename: `${this.LOG_FILE_PATH}/error.log`,
				handleExceptions: true,
				maxsize: this.MAX_FILE_SIZE,
				maxFiles: this.MAX_FILES
			}),
			new transports.File({
				level: 'fatal',
				filename: `${this.LOG_FILE_PATH}/fatal.log`,
				handleExceptions: true,
				maxsize: this.MAX_FILE_SIZE,
				maxFiles: this.MAX_FILES
			}),
			new transports.Console({
				level: 'info',
				handleExceptions: true
			})
		];
	}

	/**
	 * setFormat
	 *
	 * @private
	 * @returns {*}
	 * @memberof LoggerCustom
	 */
	private setFormat(): any {
		return printf(({ level, message, label, timestamp }) => {
			const reqId = httpContext.get('reqId');
			const newlabel = reqId ? reqId : label;
			const msg = typeof message == 'object' ? JSON.stringify(message) : message;
			const log = `<div class="log-line-container"><span class="timestamp">[${this.tsFormat(timestamp)}]</span> - <span class="${level}">${
				AppConfig.microservice
			}.${level}</span> - ${newlabel} - ${msg}</div>`;
			// socket.emit('sender', { target: SOCKET_TARGET, log });
			return `${this.tsFormat(timestamp)} [${newlabel}] ${AppConfig.microservice}.${level}: ${msg}`;
		});
	}

	/**
	 * createLoger
	 *
	 * @returns {*}
	 * @memberof LoggerCustom
	 */
	public createLoger(): any {
		return createLogger({
			format: combine(label({ label: '-' }), timestamp(), this.setFormat()),
			transports: this.setTransports(),
			exitOnError: false,
			exceptionHandlers: [new transports.File({ filename: `${appRoot}/logs/exceptions.log` })]
		});
	}
}

export const logger = new LoggerCustom().createLoger();
