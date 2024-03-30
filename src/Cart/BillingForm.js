import React, { useState } from "react";
import "./Cart.css";

function BillingForm({ onCheckout }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [newsletterSubscription, setNewsletterSubscription] = useState(false);
  const [gender, setGender] = useState(""); // Added gender
  const [billingCountry, setBillingCountry] = useState(""); // Added billing country

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCreditCardNumberChange = (e) => {
    setCreditCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleNewsletterSubscriptionChange = (e) => {
    setNewsletterSubscription(e.target.checked);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleBillingCountryChange = (e) => {
    setBillingCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const billingInfo = {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      country,
      creditCardNumber,
      expiryDate,
      cvv,
      promoCode,
      shippingMethod,
      newsletterSubscription,
      gender, // Include gender in the billing info
      billingCountry, // Include billing country in the billing info
    };
    onCheckout(billingInfo);
  };

  return (
    <div className="billing-form">
      <h3>Billing Information</h3>
      <form onSubmit={handleSubmit}>
        {/* Add more form groups as needed */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea value={address} onChange={handleAddressChange} required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <select value={country} onChange={handleCountryChange} required>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Pakistan">Pakistan</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="India">India</option>
            <option value="Brazil">Brazil</option>
            <option value="Mexico">Mexico</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="form-group">
          <label>Credit Card Number:</label>
          <input
            type="text"
            value={creditCardNumber}
            onChange={handleCreditCardNumberChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={handleCvvChange} required />
        </div>
        <div className="form-group">
          <label>Promo Code:</label>
          <input
            type="text"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
        </div>
        <div className="form-group">
          <label>Shipping Method:</label>
          <select value={shippingMethod} onChange={handleShippingMethodChange}>
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
          </select>
        </div>
        <div className="form-group">
          <label>Subscribe to Newsletter:</label>
          <input
            type="checkbox"
            checked={newsletterSubscription}
            onChange={handleNewsletterSubscriptionChange}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Billing Country:</label>
          <select
            value={billingCountry}
            onChange={handleBillingCountryChange}
            required
          >
            <option value="">Select Billing Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Pakistan">Pakistan</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="India">India</option>
            <option value="Brazil">Brazil</option>
            <option value="Mexico">Mexico</option>
            <option value="Japan">Japan</option>
            {/* Add more billing country options here */}
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default BillingForm;
