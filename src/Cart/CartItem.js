import React, { useState } from 'react';
import './Cart.css';

function CartItem({ item, onRemoveFromCart, onUpdateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="remove-button" onClick={() => onRemoveFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
