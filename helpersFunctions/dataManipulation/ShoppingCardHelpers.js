// ShoppingCardHelpers

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

// Fonction pour calculer le prix total d'un panier avec TVA
export function calculateTotalPriceWithVAT(cart, vatRate) {
  let totalPrice = 0;
  for (const item of cart) {
    const itemPriceWithVAT = (item.price * item.quantity * (1 + vatRate / 100));
    totalPrice += itemPriceWithVAT;
  }
  return totalPrice;
}

// Fonction pour vider complètement le panier
export function clearCart() {
  return [];
}

// Fonction pour obtenir le nombre total d'articles dans le panier
export function getCartItemCount(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Fonction pour vérifier si le panier est vide
export function isCartEmpty(cart) {
  return cart.length === 0;
}

// Fonction pour calculer la sous-total du panier
export function calculateSubtotal(cart) {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Fonction pour vérifier si un panier dépasse un certain montant total
export function isCartTotalAboveLimit(cart, limit) {
  return calculateSubtotal(cart) > limit;
}

// Fonction pour réinitialiser la quantité de tous les articles dans le panier à 1
export function resetCartItemQuantities(cart) {
  return cart.map((item) => ({ ...item, quantity: 1 }));
}
