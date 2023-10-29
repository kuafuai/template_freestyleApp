import React from 'react';

const HomePage = () => {
  const handleCheckIn = () => {
    // Implementation details for check-in functionality
    console.log('Check-in button clicked');
  };

  return (
    <div>
      <button onClick={handleCheckIn}>Check-in</button>
    </div>
  );
};

export default HomePage;