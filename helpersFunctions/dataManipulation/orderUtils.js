import crypto from 'crypto';

// Fonction pour générer un numéro de commande unique avec un hachage SHA-256
export function generateOrderNumber(customerId, productIds) {
	const uniqueInfo = `${customerId}_${productIds.join('_')}_${Date.now()}`;
	const hash = crypto.createHash('sha256').update(uniqueInfo).digest('hex');

	const orderNumber = hash.substr(0, 10).toUpperCase(); // Utilisez les premiers 10 caractères du hachage

	return orderNumber;
}

// Fonction pour générer un numéro de commande simple basé sur la date
export function generateSimpleOrderNumber() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');
	const randomDigits = Math.floor(Math.random() * 10000)
		.toString()
		.padStart(4, '0');

	// Vous pouvez ajouter d'autres informations ou préfixes si nécessaire
	const orderNumber = `${year}${month}${day}${randomDigits}`;

	return orderNumber;
}

/**************** Exemple d'utilisation ******************/ 
import { generateOrderNumber, generateSimpleOrderNumber } from './orderUtils';

// Utilisation de la fonction generateOrderNumber
const customerId = '12345';
const productIds = ['product1', 'product2'];
const orderNumber = generateOrderNumber(customerId, productIds);

console.log(
	`Numéro de commande généré (avec hachage SHA-256) : ${orderNumber}`
);

// Utilisation de la fonction generateSimpleOrderNumber
const simpleOrderNumber = generateSimpleOrderNumber();

console.log(`Numéro de commande simple généré : ${simpleOrderNumber}`);
/**************** Exemple d'utilisation ******************/ 
