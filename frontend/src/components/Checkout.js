
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

export default Checkout;
