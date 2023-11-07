// Valider une adresse email
export function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Valider un numéro de téléphone
export function isValidPhoneNumber(phoneNumber) {
	const phoneRegex = /^\d{10}$/; // Exemple : 1234567890 (10 chiffres)
	return phoneRegex.test(phoneNumber);
}

/*****
 * 
 * 
 * import { isValidEmail } from './validationHelpers';

const email = 'user@example.com';
const isValid = isValidEmail(email);
console.log(`L'email ${email} est valide : ${isValid}`); // Résultat : "L'email user@example.com est valide : true"


 */