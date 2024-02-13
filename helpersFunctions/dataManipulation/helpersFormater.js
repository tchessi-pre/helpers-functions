// Convertir une chaîne en majuscules
export function toUpperCase(text) {
	return text.toUpperCase();
}

// Convertir une chaîne en minuscules
export function toLowerCase(text) {
	return text.toLowerCase();
}

// Mettre la première lettre en majuscule
export function capitalizeFirstLetter(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

// Styliser en "Titre" (chaque mot commence par une majuscule)
export function toTitleCase(text) {
	return text
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

// Convertir en Camel Case (chaque mot sauf le premier commence par une majuscule)
export function toCamelCase(text) {
	const words = text.split(' ');
	const camelCaseWords = words.map((word, index) =>
		index === 0 ? word.toLowerCase() : capitalizeFirstLetter(word)
	);
	return camelCaseWords.join('');
}

// Convertir en Snake Case (remplacer les espaces par des underscores)
export function toSnakeCase(text) {
	return text.toLowerCase().replace(/ /g, '_');
}

// Convertir en Kebab Case (remplacer les espaces par des tirets)
export function toKebabCase(text) {
	return text.toLowerCase().replace(/ /g, '-');
}
