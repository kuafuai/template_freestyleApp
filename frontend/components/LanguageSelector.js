import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">-- Select --</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
      {selectedLanguage && <p>Selected Language: {selectedLanguage}</p>}
    </div>
  );
};

export default LanguageSelector;
