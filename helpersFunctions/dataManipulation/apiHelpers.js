// apiHelpers.js
import axios from 'axios';

// URL de base de votre API
const API_BASE_URL = 'https://votre-api.com';

/**
 * Effectue une requête GET vers une API.
 *
 * @param {string} endpoint - Le chemin de l'endpoint de l'API.
 * @returns {Promise} - Une promesse contenant la réponse de l'API.
 */
export function get(endpoint) {
	const url = `${API_BASE_URL}${endpoint}`;
	return axios.get(url);
}

/**
 * Effectue une requête POST vers une API.
 *
 * @param {string} endpoint - Le chemin de l'endpoint de l'API.
 * @param {object} data - Les données à envoyer dans la requête.
 * @returns {Promise} - Une promesse contenant la réponse de l'API.
 */
export function post(endpoint, data) {
	const url = `${API_BASE_URL}${endpoint}`;
	return axios.post(url, data);
}

/**
 * Effectue une requête PUT vers une API.
 *
 * @param {string} endpoint - Le chemin de l'endpoint de l'API.
 * @param {object} data - Les données à envoyer dans la requête.
 * @returns {Promise} - Une promesse contenant la réponse de l'API.
 */
export function put(endpoint, data) {
	const url = `${API_BASE_URL}${endpoint}`;
	return axios.put(url, data);
}

/**
 * Effectue une requête DELETE vers une API.
 *
 * @param {string} endpoint - Le chemin de l'endpoint de l'API.
 * @returns {Promise} - Une promesse contenant la réponse de l'API.
 */
export function del(endpoint) {
	const url = `${API_BASE_URL}${endpoint}`;
	return axios.delete(url);
}


/********** Exemple d'utilisation */

import { get, post, put, del } from './apiHelpers';

// Exemple d'utilisation d'une requête GET
get('/posts')
  .then((response) => {
    console.log('Réponse de l\'API (GET) :', response.data);
  })
  .catch((error) => {
    console.error('Erreur lors de la requête GET :', error);
  });

// Exemple d'utilisation d'une requête POST
const postData = { title: 'Nouveau post', content: 'Contenu du post' };
post('/posts', postData)
  .then((response) => {
    console.log('Réponse de l\'API (POST) :', response.data);
  })
  .catch((error) => {
    console.error('Erreur lors de la requête POST :', error);
  });

