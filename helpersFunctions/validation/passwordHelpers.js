// Fonction pour vérifier la longueur minimale du mot de passe
export function hasMinLength(password, minLength) {
	return password.length >= minLength;
}

// Fonction pour vérifier la présence de lettres majuscules dans le mot de passe
export function hasUpperCase(password) {
	return /[A-Z]/.test(password);
}

// Fonction pour vérifier la présence de lettres minuscules dans le mot de passe
export function hasLowerCase(password) {
	return /[a-z]/.test(password);
}

// Fonction pour vérifier la présence de chiffres dans le mot de passe
export function hasDigit(password) {
	return /\d/.test(password);
}

// Fonction pour vérifier la présence de caractères spéciaux dans le mot de passe
export function hasSpecialChar(password) {
	return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
}

// Fonction de validation complète du mot de passe
export function validatePassword(password, minLength) {
	return (
		hasMinLength(password, minLength) &&
		hasUpperCase(password) &&
		hasLowerCase(password) &&
		hasDigit(password) &&
		hasSpecialChar(password)
	);
}

/****** 
import * as passwordHelpers from './passwordHelpers';

const password = 'MonMotDePasse123!';
const minLength = 8;

if (validatePasswordHelpers.validatePassword(password, minLength)) {
  console.log('Le mot de passe est valide.');
} else {
  console.log('Le mot de passe est invalide.');
}

*/