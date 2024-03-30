import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Feel free to get in touch with us for any inquiries, feedback, or support.</p>
            <div className="contact-info">
                <div className="contact-form">
                    <form action="#" method="POST">
                        <div className="form">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        <div className="form">
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        <div className="form">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="contact-details">
                    <h2>Contact Details</h2>
                    <p><i className="fas fa-map-marker-alt"></i> 123 Gaming Ave, Gamer City, GameWorld</p>
                    <p><i className="fas fa-envelope"></i> Email: contact@gamingworld.com</p>
                    <p><i className="fas fa-phone"></i> Phone: +1 (123) 456-7890</p>
                    <div className="social-icons">
                        <Link to="/" className="fade-in"><i className="fab fa-facebook"></i></Link>
                        <Link to="/" className="fade-in"><i className="fab fa-twitter"></i></Link>
                        <Link to="/" className="fade-in"><i className="fab fa-instagram"></i></Link>
                        <Link to="/" className="fade-in"><i className="fab fa-linkedin"></i></Link>
                        <Link to="/" className="fade-in"><i className="fab fa-whatsapp"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
