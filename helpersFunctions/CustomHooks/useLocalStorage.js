import { useCallback, useState, useEffect } from "react";

// Hook personnalisé pour utiliser le stockage local
export function useLocalStorage(key, defaultValue) {
  // Validation des paramètres
  if (typeof key !== "string") {
    throw new Error("Key must be a string");
  }

  // Gestion de la valeur par défaut
  const initialDefaultValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;

  return useStorage(key, initialDefaultValue, window.localStorage);
}

// Hook personnalisé pour utiliser le stockage de session
export function useSessionStorage(key, defaultValue) {
  // Validation des paramètres
  if (typeof key !== "string") {
    throw new Error("Key must be a string");
  }

  // Gestion de la valeur par défaut
  const initialDefaultValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;

  return useStorage(key, initialDefaultValue, window.sessionStorage);
}

// Fonction interne pour gérer le stockage
function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
  });

  useEffect(() => {
    if (value === undefined) {
      storageObject.removeItem(key);
    } else {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}


// Exemple d'utilisation

import useAsync from "./useAsync"

export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = false
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  })

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}