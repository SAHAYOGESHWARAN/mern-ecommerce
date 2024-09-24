
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default Product;
