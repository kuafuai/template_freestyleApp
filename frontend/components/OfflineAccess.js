// TODO: Implement the OfflineAccess component code here

// Import necessary modules
import React, { useState, useEffect } from 'react';

// OfflineAccess component
const OfflineAccess = () => {
  // State variables
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Event listener for online/offline status change
  const handleOnlineStatusChange = () => {
    setIsOnline(navigator.onLine);
  };

  // Effect hook to add/remove event listener
  useEffect(() => {
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  // Render component
  return (
    <div>
      {isOnline ? (
        <p>You are currently online.</p>
      ) : (
        <p>You are currently offline. Accessing cached content...</p>
      )}
    </div>
  );
};

export default OfflineAccess;
