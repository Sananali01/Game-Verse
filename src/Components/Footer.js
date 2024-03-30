// components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="gaming-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2 className="gaming-footer-heading">About Us</h2>
            <p>
              "Welcome to Game Verse, your ultimate destination for all things gaming!

              At Game Verse, we're passionate about gaming and dedicated to bringing you the latest news, reviews, and updates from the world of video games. Whether you're a hardcore gamer, a casual player, or just curious about the gaming universe, we've got something for you.
            </p>
          </div>
          <div className="col-md-3">
            <h2 className="gaming-footer-heading">Useful Links</h2>
            <ul className="useful-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Games">Games</Link></li>
              <li><Link to="/Buying">Buy & Play</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h2 className="gaming-footer-heading">Latest News</h2>
            <ul className="latest-news">
              <li><Link to="/">New Game Release</Link></li>
              <li><Link to="/">Gaming Tournament Winners</Link></li>
              <li><Link to="/">Upcoming Events</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="gaming-footer-heading">Follow Us</h2>
            <div className="social-icons">
              <Link to="/" className="fade-in"><i className="fab fa-facebook"></i></Link>
              <Link to="/" className="fade-in"><i className="fab fa-twitter"></i></Link>
              <Link to="/" className="fade-in"><i className="fab fa-instagram"></i></Link>
              <Link to="/" className="fade-in"><i className="fab fa-whatsapp"></i></Link>
              <br />
              <Link to="/" className="fade-in"><i className="fab fa-linkedin"></i></Link>
              <Link to="/" className="fade-in"><i className="fab fa-youtube"></i></Link>
              <Link to="/" className="fade-in"><i className="fab fa-twitch"></i></Link>

            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="container text-center">
        <p className="gaming-footer-text">&copy; 2023 Game Verse. All rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
