// Fonction pour calculer la somme de deux nombres
export function add(a, b) {
	return a + b;
}

// Fonction pour soustraire deux nombres
export function subtract(a, b) {
	return a - b;
}

// Fonction pour multiplier deux nombres
export function multiply(a, b) {
	return a * b;
}

// Fonction pour diviser deux nombres
export function divide(a, b) {
	if (b === 0) {
		throw new Error('Division by zero is not allowed.');
	}
	return a / b;
}

// Fonction pour calculer la puissance d'un nombre
export function power(base, exponent) {
	return Math.pow(base, exponent);
}

// Fonction pour calculer la racine carrée d'un nombre
export function squareRoot(number) {
	if (number < 0) {
		throw new Error('Cannot calculate square root of a negative number.');
	}
	return Math.sqrt(number);
}

// Fonction pour générer un nombre aléatoire entre min (inclus) et max (exclus)
export function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

// Fonction pour calculer la somme de plusieurs nombres
export function calculateSum(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

// Fonction pour calculer la moyenne de plusieurs nombres
export function calculateAverage(...numbers) {
  const sum = calculateSum(...numbers);
  return sum / numbers.length;
}

// Fonction pour calculer la factorielle d'un nombre
export function calculateFactorial(number) {
  if (number < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}

// Fonction pour calculer la puissance d'un nombre à un exposant donné
export function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

// Fonction pour calculer le pourcentage d'un nombre par rapport à un total
export function calculatePercentage(part, total) {
  if (total === 0) {
    throw new Error('Total cannot be zero.');
  }
  return (part / total) * 100;
}

// Fonction pour arrondir un nombre à un certain nombre de décimales
export function roundNumber(number, decimals) {
  return Number(number.toFixed(decimals));
}