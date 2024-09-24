
import React from 'react';

const Cart = ({ items, total }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
