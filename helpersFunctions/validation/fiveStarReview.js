// Fonction pour générer un avis 5 étoiles
export function generateFiveStarReview() {
	const review = {
		rating: 5, // Note de 5 étoiles
		comment: 'Excellent produit !', // Commentaire de l'avis
		date: new Date(), // Date de l'avis (actuelle)
	};

	return review;
}

// Exemple d'utilisation
import { generateFiveStarReview } from './fiveStarReview';
const review = generateFiveStarReview();
console.log(`Avis généré : ${JSON.stringify(review)}`);
