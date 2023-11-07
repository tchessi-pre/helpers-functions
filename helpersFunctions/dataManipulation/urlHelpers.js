// Obtenir les paramètres d'une URL sous forme d'objet
export function getUrlParams(url) {
	const params = {};
	new URL(url).searchParams.forEach((value, key) => {
		params[key] = value;
	});
	return params;
}

// Générer une URL avec des paramètres
export function buildUrlWithParams(baseUrl, params) {
	const url = new URL(baseUrl);
	Object.keys(params).forEach((key) => {
		url.searchParams.append(key, params[key]);
	});
	return url.toString();
}
