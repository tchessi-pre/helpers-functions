// inputHelpers.js

/**
 * Vérifie si une chaîne de caractères est vide.
 *
 * @param {string} value - La chaîne de caractères à vérifier.
 * @returns {boolean} - True si la chaîne est vide, sinon False.
 */
export function isEmpty(value) {
	return value.trim() === '';
}

/**
 * Valide une adresse e-mail.
 *
 * @param {string} email - L'adresse e-mail à valider.
 * @returns {boolean} - True si l'adresse e-mail est valide, sinon False.
 */
export function isValidEmail(email) {
	// Utilisez une expression régulière pour valider l'adresse e-mail
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	return emailRegex.test(email);
}

/**
 * Limite la longueur d'une chaîne de caractères.
 *
 * @param {string} value - La chaîne de caractères à limiter.
 * @param {number} maxLength - La longueur maximale autorisée.
 * @returns {string} - La chaîne de caractères limitée à la longueur maximale.
 */
export function limitLength(value, maxLength) {
	return value.slice(0, maxLength);
}


/*******
 * 
 * import { isEmpty, isValidEmail, limitLength } from './inputHelpers';

const inputValue = '   Hello   ';
const emailValue = 'user@example.com';
const longText = 'This is a very long text that needs to be limited.';

console.log(isEmpty(inputValue)); // Renvoie false
console.log(isValidEmail(emailValue)); // Renvoie true
console.log(limitLength(longText, 10)); // Renvoie 'This is a'

 */