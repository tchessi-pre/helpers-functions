// axiosConfig.js
import axios from 'axios';

// Configuration globale d'Axios
const axiosInstance = axios.create({
	baseURL: 'https://votre-api.com', // Remplacez par l'URL de base de votre API
	timeout: 5000, // Durée maximale d'attente pour les requêtes (en millisecondes)
	headers: {
		'Content-Type': 'application/json',
		// Ajoutez d'autres en-têtes d'autorisation ou personnalisés ici si nécessaire
	},
});

// Intercepteur de requête pour ajouter des en-têtes d'autorisation
axiosInstance.interceptors.request.use((config) => {
	// Récupérez le jeton d'authentification depuis le stockage local ou autre source
	const authToken = localStorage.getItem('authToken');

	// Ajoutez le jeton d'authentification aux en-têtes de la requête si disponible
	if (authToken) {
		config.headers.Authorization = `Bearer ${authToken}`;
	}

	return config;
});

// Intercepteur de réponse pour gérer les erreurs globales
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		// Gérez les erreurs ici, par exemple, redirigez l'utilisateur vers une page d'erreur
		console.error('Erreur de réponse globale :', error);
		return Promise.reject(error);
	}
);

export default axiosInstance;


/****** Exemple d'utilisation d'axiosInstance pour effectuer des requêtes API

import axiosInstance from './axiosConfig';

axiosInstance
	.get('/posts')
	.then((response) => {
		console.log("Réponse de l'API :", response.data);
	})
	.catch((error) => {
		console.error('Erreur lors de la requête API :', error);
	});

*/