// cookieHelpers.js

/**
 * Définit un cookie avec une durée d'expiration.
 *
 * @param {string} name - Le nom du cookie.
 * @param {string} value - La valeur du cookie.
 * @param {number} days - Le nombre de jours pendant lesquels le cookie restera valide.
 */
export function setCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = `expires=${date.toUTCString()}`;
	document.cookie = `${name}=${value}; ${expires}; path=/`;
}

/**
 * Récupère la valeur d'un cookie par son nom.
 *
 * @param {string} name - Le nom du cookie.
 * @returns {string|null} - La valeur du cookie ou null si le cookie n'existe pas.
 */
export function getCookie(name) {
	const cookieName = `${name}=`;
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim();
		if (cookie.indexOf(cookieName) === 0) {
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return null;
}

/**
 * Supprime un cookie par son nom.
 *
 * @param {string} name - Le nom du cookie à supprimer.
 */
export function deleteCookie(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/******
 * 
 * import React from 'react';
import { setCookie, getCookie, deleteCookie } from './cookieHelpers';

function CookieExample() {
  const handleSetCookie = () => {
    // Définir un cookie nommé 'user' avec une valeur et une durée d'expiration de 7 jours.
    setCookie('user', 'JohnDoe', 7);
  };

  const handleGetCookie = () => {
    // Récupérer la valeur du cookie 'user'.
    const user = getCookie('user');
    alert(`Nom d'utilisateur : ${user}`);
  };

  const handleDeleteCookie = () => {
    // Supprimer le cookie 'user'.
    deleteCookie('user');
    alert('Cookie utilisateur supprimé.');
  };

  return (
    <div>
      <h2>Gestion des cookies</h2>
      <button onClick={handleSetCookie}>Définir un cookie</button>
      <button onClick={handleGetCookie}>Récupérer le cookie</button>
      <button onClick={handleDeleteCookie}>Supprimer le cookie</button>
    </div>
  );
}

export default CookieExample;

 */