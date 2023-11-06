// Fonction pour obtenir le jour de la semaine à partir d'une date
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
	return daysOfWeek[date.getDay()];
}

// Fonction pour obtenir le mois à partir d'une date
export function getMonthName(date) {
	const months = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Août',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre',
	];
	return months[date.getMonth()];
}

// Fonction pour vérifier si une année est bissextile
export function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Fonction pour obtenir le nombre de jours dans un mois donné
export function getDaysInMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

// Fonction pour vérifier si une date est un jour férié
export function isHoliday(date) {
	// Implémentez ici la logique de vérification des jours fériés
}

// Fonction pour obtenir la différence en jours entre deux dates
export function getDaysDifference(startDate, endDate) {
	const timeDifference = endDate.getTime() - startDate.getTime();
	return Math.ceil(timeDifference / (1000 * 3600 * 24));
}

// Fonction pour formater une date en chaîne de caractères au format personnalisé
export function formatDateCustom(date, format) {
	// Implémentez ici la logique de formatage personnalisé
}

/******  Exemple d'utilisation 
 * 
 * 
import React from 'react';
import {
	getDayOfWeek,
	getMonthName,
	isLeapYear,
	getDaysInMonth,
	formatDateCustom,
} from './calendarHelpers';

function CalendarInfo() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();

	const dayOfWeek = getDayOfWeek(currentDate);
	const monthName = getMonthName(currentDate);
	const leapYear = isLeapYear(currentYear);
	const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

	const formattedDate = formatDateCustom(currentDate, 'dd/mm/yyyy');

	return (
		<div>
			<h2>Informations sur le calendrier</h2>
			<p>Jour de la semaine actuel : {dayOfWeek}</p>
			<p>Nom du mois actuel : {monthName}</p>
			<p>Année bissextile ? {leapYear ? 'Oui' : 'Non'}</p>
			<p>Nombre de jours dans le mois actuel : {daysInCurrentMonth}</p>
			<p>Date actuelle formatée : {formattedDate}</p>
		</div>
	);
}

export default CalendarInfo;


*/

