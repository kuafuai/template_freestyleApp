// src/components/ProductInfo.js

import React from 'react';
import PropTypes from 'prop-types';

function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductInfo;
