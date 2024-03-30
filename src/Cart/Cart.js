import React, { useState } from 'react';
import CartItem from './CartItem';
import BillingForm from './BillingForm';
import './Cart.css';

function Cart({ cart, onRemoveFromCart, onUpdateQuantity, onCheckout }) {
  const [showBillingForm, setShowBillingForm] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
                onUpdateQuantity={(quantity) => onUpdateQuantity(item.id, quantity)}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice()}</h3>
        {showBillingForm ? (
          <BillingForm onCheckout={() => setShowBillingForm(false)} />
        ) : (
          <button className="checkout-button" onClick={() => setShowBillingForm(true)}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
