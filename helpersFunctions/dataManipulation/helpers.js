// Fonction pour générer des chaînes de caractères aléatoires
export function generateRandomString(length) {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
}

// Fonction pour vérifier si une chaîne de caractères contient uniquement des caractères alphabétiques
export function containsOnlyLetters(inputString) {
	return /^[a-zA-Z]+$/.test(inputString);
}

// Fonction pour le calcul de la TVA
export function calculateVAT(amount, vatRate) {
	return (amount * vatRate) / 100;
}

// Fonction pour le tri d'un tableau d'objets par plusieurs clés
export function sortByMultipleKeys(array, keys) {
	return array.slice().sort((a, b) => {
		for (const key of keys) {
			if (a[key] !== b[key]) {
				return a[key] < b[key] ? -1 : 1;
			}
		}
		return 0;
	});
}

// Fonction pour la validation de numéros de téléphone
export function isValidPhoneNumber(phoneNumber) {
	// Validez le numéro de téléphone selon un format spécifique
	// Par exemple, pour un numéro de téléphone français : /^0[1-9]([.-]?[0-9]{2}){4}$/
	const phonePattern = /^0[1-9]([.-]?[0-9]{2}){4}$/;
	return phonePattern.test(phoneNumber);
}

// Fonction pour la conversion de devises
export function convertCurrency(amount, exchangeRate) {
	return amount * exchangeRate;
}

// Fonction pour la génération de chaînes de caractères avec des caractères spéciaux
export function generateRandomStringWithSpecialChars(length) {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
}

// Fonctions pour la gestion des cookies (avec js-cookie)
import Cookies from 'js-cookie';

export function setCookie(key, value, options) {
	Cookies.set(key, value, options);
}

export function getCookie(key) {
	return Cookies.get(key);
}

export function removeCookie(key) {
	Cookies.remove(key);
}

// Fonctions pour la gestion du cache local (avec localStorage)
export function setLocalStorageItem(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorageItem(key) {
	const item = localStorage.getItem(key);
	return item ? JSON.parse(item) : null;
}

export function removeLocalStorageItem(key) {
	localStorage.removeItem(key);
}
