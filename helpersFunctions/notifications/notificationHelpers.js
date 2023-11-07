// notificationHelpers.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Affiche une notification de succès.
 *
 * @param {string} message - Le message de la notification.
 */
export function showSuccessNotification(message) {
	toast.success(message);
}

/**
 * Affiche une notification d'erreur.
 *
 * @param {string} message - Le message de la notification d'erreur.
 */
export function showErrorNotification(message) {
	toast.error(message);
}

/**
 * Affiche une notification d'information.
 *
 * @param {string} message - Le message de la notification d'information.
 */
export function showInfoNotification(message) {
	toast.info(message);
}

/**
 * Efface toutes les notifications affichées.
 */
export function clearNotifications() {
	toast.dismiss();
}


/******
 * 
 * 
 * import { showSuccessNotification, showErrorNotification, showInfoNotification } from './notificationHelpers';

showSuccessNotification('Opération réussie !');
showErrorNotification('Une erreur est survenue.');
showInfoNotification('Information importante.');

 */