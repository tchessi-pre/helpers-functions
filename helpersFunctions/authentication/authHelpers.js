// authHelpers.js

/**
 * Enregistre les informations d'authentification de l'utilisateur dans le stockage local.
 *
 * @param {string} authToken - Le jeton d'authentification de l'utilisateur.
 */
export function setAuthToken(authToken) {
	localStorage.setItem('authToken', authToken);
}

/**
 * Récupère le jeton d'authentification de l'utilisateur depuis le stockage local.
 *
 * @returns {string|null} - Le jeton d'authentification ou null s'il n'est pas présent.
 */
export function getAuthToken() {
	return localStorage.getItem('authToken');
}

/**
 * Supprime le jeton d'authentification de l'utilisateur du stockage local.
 */
export function removeAuthToken() {
	localStorage.removeItem('authToken');
}

/**
 * Vérifie si l'utilisateur est actuellement authentifié.
 *
 * @returns {boolean} - True si l'utilisateur est authentifié, sinon False.
 */
export function isAuthenticated() {
	const authToken = getAuthToken();
	return authToken !== null;
}
