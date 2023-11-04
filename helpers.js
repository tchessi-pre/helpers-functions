// helpers.js

// Fonction pour initialiser un panier vide
export function initializeCart() {
	return [];
}

// Fonction pour ajouter un article au panier
export function addToCart(cart, item) {
	const updatedCart = [...cart, item];
	return updatedCart;
}

// Fonction pour supprimer un article du panier par son ID
export function removeFromCart(cart, itemId) {
	const updatedCart = cart.filter((item) => item.id !== itemId);
	return updatedCart;
}

// Fonction pour mettre à jour la quantité d'un article dans le panier
export function updateCartItemQuantity(cart, itemId, newQuantity) {
	const updatedCart = cart.map((item) => {
		if (item.id === itemId) {
			return { ...item, quantity: newQuantity };
		}
		return item;
	});
	return updatedCart;
}
