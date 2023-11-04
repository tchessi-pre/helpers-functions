// Vérifier si une chaîne de caractères est vide
export function isEmptyString(value) {
	return value.trim() === '';
}

// Vérifier si une valeur est nulle ou indéfinie
export function isNullOrUndefined(value) {
	return value === null || value === undefined;
}

// Vérifier si une valeur est un nombre entier
export function isInteger(value) {
	return Number.isInteger(value);
}

// Vérifier si une valeur est un nombre décimal
export function isDecimal(value) {
	return (
		!Number.isNaN(value) && Number.isFinite(value) && !Number.isInteger(value)
	);
}

// Vérifier si une valeur est un objet vide
export function isEmptyObject(value) {
	return Object.keys(value).length === 0;
}

// Vérifier si une valeur est un tableau vide
export function isEmptyArray(value) {
	return Array.isArray(value) && value.length === 0;
}

// Vérifier si une valeur est une adresse email valide
export function isValidEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}
