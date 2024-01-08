import React from 'react';
import PropTypes from 'prop-types';

const ProductDetailComponent = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>{product.description}</p>
      <p>Brand: {product.brandName}</p>
    </div>
  );
};

// Add PropTypes
ProductDetailComponent.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetailComponent;
