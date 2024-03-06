import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};


// Exemple d'utilisation :

import React from 'react';
import useOnlineStatus from './useOnlineStatus';

const MyComponent = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Statut de la connexion en ligne : {isOnline ? 'En ligne' : 'Hors ligne'}</p>
    </div>
  );
};

export default MyComponent;
