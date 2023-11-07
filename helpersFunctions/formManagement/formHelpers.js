// formHelpers.js

/**
 * Réinitialise tous les champs d'un formulaire à leurs valeurs par défaut.
 *
 * @param {HTMLFormElement} form - L'élément de formulaire HTML à réinitialiser.
 */
export function resetForm(form) {
	form.reset();
}

/**
 * Collecte les valeurs des champs d'un formulaire sous forme d'objet.
 *
 * @param {HTMLFormElement} form - L'élément de formulaire HTML.
 * @returns {object} - Un objet contenant les noms des champs en tant que clés et leurs valeurs en tant que valeurs.
 */
export function collectFormValues(form) {
	const formData = new FormData(form);
	const formValues = {};

	formData.forEach((value, key) => {
		formValues[key] = value;
	});

	return formValues;
}

/**
 * Valide un formulaire en vérifiant si tous les champs obligatoires sont remplis.
 *
 * @param {HTMLFormElement} form - L'élément de formulaire HTML à valider.
 * @returns {boolean} - True si le formulaire est valide, sinon False.
 */
export function validateForm(form) {
	const requiredFields = form.querySelectorAll('[required]');

	for (const field of requiredFields) {
		if (!field.value) {
			return false;
		}
	}

	return true;
}


/****
 * 
 * import React, { useState } from 'react';
import { resetForm, collectFormValues, validateForm } from './formHelpers';

function SimpleForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valider le formulaire
    if (!validateForm(e.target)) {
      setFormError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Collecter les valeurs des champs
    const collectedData = collectFormValues(e.target);
    console.log('Données soumises :', collectedData);

    // Réinitialiser le formulaire après la soumission
    resetForm(e.target);
    setFormError('');
  };

  return (
    <div>
      <h2>Formulaire Simple</h2>
      {formError && <div className="error">{formError}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Prénom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Nom :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default SimpleForm;

 */