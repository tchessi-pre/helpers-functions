// Effectuer une requête POST JSON avec fetch
export async function postJson(url, data) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

// Effectuer une requête GET avec fetch et gestion des erreurs
export async function getWithRetry(url, maxRetries = 3) {
	let retries = 0;
	while (retries < maxRetries) {
		try {
			const response = await fetch(url);
			if (response.ok) {
				return response.json();
			}
			throw new Error('Erreur de réponse du serveur');
		} catch (error) {
			retries++;
			if (retries === maxRetries) {
				throw error;
			}
			// Attendez quelques secondes avant de réessayer (facultatif)
			await new Promise((resolve) => setTimeout(resolve, 2000));
		}
	}
}

/******
 * 
 * import { postJson } from './httpHelpers';

const apiUrl = 'https://example.com/api';
const data = { name: 'John', age: 30 };

postJson(apiUrl, data)
  .then((response) => {
    console.log('Réponse du serveur :', response);
  })
  .catch((error) => {
    console.error('Erreur de requête :', error);
  });

 */