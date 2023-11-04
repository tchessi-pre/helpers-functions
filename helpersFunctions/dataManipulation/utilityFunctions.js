// Fonction pour la génération d'identifiants uniques (UUID)
export function generateUUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

// Fonction pour la pagination
export function paginateData(data, pageSize, currentPage) {
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	return data.slice(startIndex, endIndex);
}

// Fonction pour le formatage de devises
export function formatCurrency(amount, currencyCode) {
	return new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: currencyCode,
	}).format(amount);
}

// Fonction pour la conversion d'unités (de mètres à pieds)
export function convertMetersToFeet(meters) {
	return meters * 3.28084;
}

// Fonction pour la génération de chaînes de caractères alphanumériques aléatoires
export function generateRandomAlphanumericString(length) {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
}

// Fonction pour le calcul de l'âge à partir de la date de naissance
export function calculateAge(dateOfBirth) {
	const birthDate = new Date(dateOfBirth);
	const currentDate = new Date();
	const age = currentDate.getFullYear() - birthDate.getFullYear();
	return age;
}

// Fonction pour la validation de codes postaux (format français)
export function isValidFrenchPostalCode(postalCode) {
	const postalCodePattern = /^(?:[0-8]\d|9[0-8])\d{3}$/;
	return postalCodePattern.test(postalCode);
}

// Fonction pour le calcul de la moyenne d'un tableau de nombres
export function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Fonction pour la génération de nombres aléatoires dans une plage donnée
export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour la vérification de la validité d'une adresse IP
export function isValidIPAddress(ipAddress) {
  const ipPattern =
    /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  return ipPattern.test(ipAddress);
}

// Fonction pour la gestion du scroll vers le haut de la page
export function scrollToTop() {
  window.scrollTo(0, 0);
}

// Fonction pour la détection de la présence d'un objet dans un tableau
export function containsObject(obj, list) {
  return list.some(item => JSON.stringify(item) === JSON.stringify(obj));
}

// Fonction pour la gestion des requêtes HTTP avec Fetch ou Axios
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur réseau');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error.message}`);
    throw error;
  }
}

// Fonction pour la gestion des erreurs réseau lors des requêtes HTTP
export function handleNetworkError(error) {
  console.error(`Erreur réseau : ${error.message}`);
  // Afficher une notification d'erreur ou effectuer une autre action de gestion des erreurs
}

// Fonction pour le calcul du pourcentage
export function calculatePercentage(part, whole) {
  return (part / whole) * 100;
}

// Fonction pour la génération d'une liste de nombres dans une plage donnée
export function generateNumberRange(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
