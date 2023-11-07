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


// Génère un mot de passe aléatoire avec une longueur spécifiée
export function generateRandomPassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

/******
 * 
 * import React, { useState } from 'react';
import { generateRandomPassword } from './passwordHelpers';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(passwordLength);
    setPassword(newPassword);
  };

  return (
    <div>
      <h2>Générateur de Mot de Passe</h2>
      <div>
        <label htmlFor="passwordLength">Longueur du mot de passe :</label>
        <input
          type="number"
          id="passwordLength"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          min="1"
        />
      </div>
      <button onClick={handleGeneratePassword}>Générer un mot de passe</button>
      {password && (
        <div>
          <p>Mot de passe généré : {password}</p>
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;

 */