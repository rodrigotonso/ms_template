export class MessageValidator {
	/**
	 * messageFormat
	 *
	 * @private
	 * @static
	 * @param {string} field
	 * @param {string} customMessage
	 * @param {string} [option]
	 * @returns {string}
	 * @memberof MessageValidator
	 */
	private static messageFormat(field: string, customMessage: string, option?: string): string {
		const fieldSplited = field.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
		const opt =
			option != undefined ? option.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() : null;
		if (opt) {
			return `${fieldSplited} ${customMessage} ${opt}`;
		}
		return `${fieldSplited} ${customMessage}`;
	}

	/**
	 *
	 *
	 * @private
	 * @static
	 * @param {string} field
	 * @param {string} customMessage
	 * @param {string} [option]
	 * @return {*}  {string}
	 * @memberof MessageValidator
	 */
	private static messageFormatCompare(field1: string, field2: string, customMessage: string, option?: string): string {
		const field1Splited = field1.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
		const field2Splited = field2.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
		const opt =
			option != undefined ? option.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() : null;
		if (opt) {
			return `${field1Splited} ${customMessage} ${opt} ${field2Splited}`;
		}
		return `${field1Splited} ${customMessage} ${field2Splited}`;
	}
	/**
	 * isRequired
	 *
	 * @param {string} field
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static isRequired(field: string): string {
		return this.messageFormat(field, 'is required');
	}
	/**
	 * isInt
	 *
	 * @param {string} field
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static isInt(field: string): string {
		return this.messageFormat(field, 'must be an integer');
	}

	/**
	 * isArray
	 *
	 * @static
	 * @param {string} field
	 * @return {*}  {string}
	 * @memberof MessageValidator
	 */
	public static isArray(field: string): string {
		return this.messageFormat(field, 'must be an array');
	}
	
	/**
	 * isString
	 *
	 * @param {string} field
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static isString(field: string): string {
		return this.messageFormat(field, 'must be of type string');
	}

	/**
	 * isDate
	 *
	 * @static
	 * @param {string} field
	 * @return {*}  {string}
	 * @memberof MessageValidator
	 */
	public static isDate(field: string): string {
		return this.messageFormat(field, 'must be of type date');
	}
	/**
	 * isDecimal
	 *
	 * @static
	 * @param {string} field
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static isDecimal(field: string): string {
		return this.messageFormat(field, 'must be of type decimal');
	}
	/**
	 * isLength
	 *
	 * @param {string} field
	 * @param {number} maxLength
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static maxLength(field: string, maxLength: number): string {
		const message = `can't be more than ${maxLength} characters long`;
		return this.messageFormat(field, message);
	}
	/**
	 * minLength
	 *
	 * @static
	 * @param {string} field
	 * @param {number} minLength
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static minLength(field: string, minLength: number): string {
		const message = `can't be less than ${minLength} characters long`;
		return this.messageFormat(field, message);
	}
	/**
	 * incorrect
	 *
	 * @param {string} field
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static incorrect(field: string): string {
		return this.messageFormat(field, 'incorrect');
	}
	/**
	 * inUse
	 *
	 * @static
	 * @param {string} field
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static inUse(field: string): string {
		return this.messageFormat(field, 'already in use');
	}
	/**
	 * hasRelateditems
	 *
	 * @static
	 * @param {string} field
	 * @param {string} items
	 * @returns {string}
	 * @memberof MessageValidator
	 */
	public static hasRelatedItems(field: string, items: string): string {
		return this.messageFormat(field, 'has related', items);
	}
	/**
	 * mustBeOfType
	 *
	 * @static
	 * @param {string} field
	 * @param {string} type
	 * @returns {string}
	 * @memberof MessageValidator
	 */
	public static mustBeOfType(field: string, type: string): string {
		return this.messageFormat(field, 'must be of type', type);
	}
	/**
	 * arrayEmpty
	 *
	 * @static
	 * @param {string} field
	 * @returns {string}
	 * @memberof CustomMessageValidate
	 */
	public static arrayEmpty(field: string): string {
		return this.messageFormat(field, 'array empty');
	}
	/**
	 * isEmpty
	 *
	 * @static
	 * @param {string} field
	 * @returns {string}
	 * @memberof MessageValidator
	 */
	public static isEmpty(field: string): string {
		return this.messageFormat(field, 'can not be empty');
	}

	/**
	 * mustBeGreaterThan
	 *
	 * @static
	 * @param {string} fieldOne
	 * @param {string} fieldTwo
	 * @return {*}  {string}
	 * @memberof MessageValidator
	 */
	public static mustBeGreaterThan(fieldOne: string, fieldTwo: string): string {
		return this.messageFormatCompare(fieldOne, fieldTwo, 'must be greater than');
	}

	/**
	 * mustBeLessThan
	 *
	 * @static
	 * @param {string} fieldOne
	 * @param {string} fieldTwo
	 * @return {*}  {string}
	 * @memberof MessageValidator
	 */
	public static mustBeLessThan(fieldOne: string, fieldTwo: string): string {
		return this.messageFormatCompare(fieldOne, fieldTwo, 'must be less than');
	}
}
