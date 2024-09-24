
import React, { useState } from 'react';

const Checkout = ({ onCheckout }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout({ name, address });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Full Name" 
        required 
      />
      <input 
        type="text" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        placeholder="Shipping Address" 
        required 
      />
      <button type="submit">Checkout</button>
    </form>
  );
};

// frontend/src/components/Checkout.js
const handleCheckout = async (totalAmount) => {
    const response = await fetch('http://localhost:5000/api/payment/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalAmount }),
    });
    const { clientSecret } = await response.json();
    // Use clientSecret to confirm payment with Stripe.js
  };
  

export default Checkout;
