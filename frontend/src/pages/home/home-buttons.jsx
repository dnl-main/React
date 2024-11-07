import React from 'react';
import './home-buttons.css'

const HomeButtons = () => {
  return (
    <section className="home-buttons">
      <div className="button-group">
        <button className="product-add-button">Add Product</button>
        <button className="product-edit-button">Edit Product</button>
        <button className="product-view-button">View Product</button>
        <button className="product-delete-button">Delete Product</button>
      </div>
    </section>
  );
}

export default HomeButtons;