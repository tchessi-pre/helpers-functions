// Fonction pour tronquer une chaîne de caractères à une longueur maximale
export function truncateString(str, maxLength) {
	if (str.length <= maxLength) {
		return str;
	}
	return str.slice(0, maxLength) + '...';
}

// Fonction pour convertir une chaîne de caractères en majuscules
export function uppercaseString(str) {
	return str.toUpperCase();
}

// Fonction pour convertir une chaîne de caractères en minuscules
export function lowercaseString(str) {
	return str.toLowerCase();
}

// Fonction pour capitaliser la première lettre d'une chaîne de caractères
export function capitalizeString(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Fonction pour vérifier si une chaîne de caractères contient une sous-chaîne donnée
export function containsSubstring(str, substring) {
	return str.includes(substring);
}

// Fonction pour remplacer toutes les occurrences d'une sous-chaîne par une autre
export function replaceSubstring(str, search, replace) {
	return str.replace(new RegExp(search, 'g'), replace);
}

// Fonction pour diviser une chaîne de caractères en un tableau en utilisant un délimiteur
export function splitString(str, delimiter) {
	return str.split(delimiter);
}
