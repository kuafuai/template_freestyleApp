// PromotionCard.js

import React from 'react';

const PromotionCard = ({ title, description, image }) => {
  return (
    <div className="promotion-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PromotionCard;
