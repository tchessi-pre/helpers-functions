// arrayHelpers.js

// Fonction pour vérifier si tous les éléments d'un tableau satisfont une condition
export function areAllElementsTrue(arr, condition) {
	return arr.every(condition);
}

// Fonction pour vérifier si au moins un élément d'un tableau satisfait une condition
export function isAnyElementTrue(arr, condition) {
	return arr.some(condition);
}

// Fonction pour compter le nombre d'occurrences d'un élément dans un tableau
export function countOccurrences(arr, element) {
	return arr.reduce(
		(count, currentElement) => (currentElement === element ? count + 1 : count),
		0
	);
}

// Fonction pour fusionner deux tableaux en un seul
export function mergeArrays(arr1, arr2) {
	return [...arr1, ...arr2];
}

// Fonction pour retourner un nouveau tableau sans les doublons
export function removeDuplicates(arr) {
	return [...new Set(arr)];
}

// Fonction pour obtenir un sous-ensemble d'un tableau en fonction d'un critère
export function filterArrayByCondition(arr, condition) {
	return arr.filter(condition);
}

// Fonction pour inverser l'ordre des éléments dans un tableau
export function reverseArray(arr) {
	return [...arr].reverse();
}

// Trouver l'élément le plus fréquent dans un tableau
export function findMostFrequentElement(arr) {
  const elementCount = {};
  let mostFrequentElement = null;
  let maxCount = 0;

  arr.forEach((element) => {
    if (!elementCount[element]) {
      elementCount[element] = 1;
    } else {
      elementCount[element]++;
    }

    if (elementCount[element] > maxCount) {
      mostFrequentElement = element;
      maxCount = elementCount[element];
    }
  });

  return mostFrequentElement;
}

// Vérifier si un tableau est trié de manière ascendante
export function isSortedAscending(arr) {
  return arr.every((value, index, array) => index === 0 || value >= array[index - 1]);
}


/******* Exemple d'utilisation 
 * 
 import * as arrayHelpers from './arrayHelpers';
const numbers = [1, 2, 3, 4, 5, 6];
const hasAllEvenNumbers = arrayHelpers.areAllElementsTrue(
	numbers,
	(num) => num % 2 === 0
);
const hasAnyOddNumber = arrayHelpers.isAnyElementTrue(
	numbers,
	(num) => num % 2 !== 0
);
const countFours = arrayHelpers.countOccurrences(numbers, 4);
const mergedArrays = arrayHelpers.mergeArrays([1, 2], [3, 4]);
const uniqueNumbers = arrayHelpers.removeDuplicates([1, 2, 2, 3, 3, 4]);
const filteredNumbers = arrayHelpers.filterArrayByCondition(
	numbers,
	(num) => num > 3
);
const reversedNumbers = arrayHelpers.reverseArray(numbers);

*/
