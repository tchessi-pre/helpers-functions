// Vérifier si un mot de passe est valide
export function isValidPassword(password) {
	// Au moins 8 caractères
	if (password.length < 8) {
		return false;
	}

	// Au moins une lettre majuscule
	if (!/[A-Z]/.test(password)) {
		return false;
	}

	// Au moins une lettre minuscule
	if (!/[a-z]/.test(password)) {
		return false;
	}

	// Au moins un chiffre
	if (!/[0-9]/.test(password)) {
		return false;
	}

	// Peut contenir des caractères spéciaux (par exemple, !@#$%^&)
	if (!/[!@#$%^&*]/.test(password)) {
		return false;
	}

	// Aucun espace blanc
	if (/\s/.test(password)) {
		return false;
	}

	// Si toutes les conditions sont remplies, le mot de passe est valide
	return true;
}
