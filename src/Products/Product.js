import React from 'react';
import './Product.css';
import { toast } from 'react-toastify';



function Product({ product, onAddToCart }) {
  const notifyItemAddedToCart = (itemName) => {
    toast.success(`${itemName} has been added to your cart`, {
      position: 'bottom-center', // Change the position
      autoClose: 1000,
      className: 'custom-toast',
    });
  };
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-button" onClick={() => {
          onAddToCart(product);
          notifyItemAddedToCart(product.name); // Notify when added to cart
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
