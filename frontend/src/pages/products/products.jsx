import React from 'react';
import './products.css'

const Products = () => {
  return (
    <div className="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product-item">
            <h3>Product 1</h3>
            <p>Brief description of Product 1.</p>
          </div>
          <div className="product-item">
            <h3>Product 2</h3>
            <p>Brief description of Product 2.</p>
          </div>
          <div className="product-item">
            <h3>Product 3</h3>
            <p>Brief description of Product 3.</p>
          </div>
        </div>
    </div>
  );
};

export default Products;
