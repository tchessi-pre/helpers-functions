// Obtenir la date du jour au format "YYYY-MM-DD"
export function getCurrentDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

// Obtenir le jour de la semaine à partir d'une date
export function getDayOfWeek(date) {
	const daysOfWeek = [
		'Dimanche',
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi',
	];
	const dayIndex = date.getDay();
	return daysOfWeek[dayIndex];
}

// Formater une date au format personnalisé
export function formatDateCustom(date, format) {
	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	};

	if (format === 'short') {
		options.year = undefined;
	} else if (format === 'long') {
		options.month = 'long';
	}

	return new Date(date).toLocaleDateString(undefined, options);
}

// Calculer la différence de jours entre deux dates
export function calculateDaysDifference(date1, date2) {
	const oneDay = 24 * 60 * 60 * 1000; // en millisecondes
	const firstDate = new Date(date1);
	const secondDate = new Date(date2);
	const differenceInDays = Math.round(
		Math.abs((firstDate - secondDate) / oneDay)
	);
	return differenceInDays;
}

// Fonction pour la génération de dates futures ou passées
export function generateRandomDate(startDate, endDate) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
  return new Date(randomTimestamp);
}