import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGamepad, faNewspaper, faInfoCircle, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NavBar({ cart }) {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Game Verse Logo"
            className='navbar-logo'
          />
          <span>Game Verse</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Games">
                <FontAwesomeIcon icon={faGamepad} /> Games
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Buying">
                <FontAwesomeIcon icon={faNewspaper} /> Buy & Play
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                <FontAwesomeIcon icon={faInfoCircle} /> About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                <FontAwesomeIcon icon={faShoppingCart} /> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className='carticon'>
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalQuantity > 0 && <span className="cart-item-count">{totalQuantity}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
