import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Games from "./Components/Games";
import Buying from "./Components/Buying";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProductList from "./Products/ProductList";
import ProductDetail from "./Products/ProductDetail";
import Cart from "./Cart/Cart";
import productsData from "./Products/ProductData";

function App() {
  const [cart, setCart] = useState([]);





  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Handle checkout logic here, e.g., open billing form
  };

  return (
    <div className="App">
      <Router>
        <NavBar cart={cart} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Buying" element={<Buying onAddToCart={addToCart} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route
            path="/products"
            element={
              <ProductList products={productsData} onAddToCart={addToCart} />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onRemoveFromCart={removeFromCart}
                onUpdateQuantity={updateQuantity}
                onCheckout={handleCheckout}
              />
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
