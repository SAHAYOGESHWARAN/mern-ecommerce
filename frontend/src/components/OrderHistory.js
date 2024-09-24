// frontend/src/components/OrderHistory.js
import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://localhost:5000/api/orders', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <h3>Order ID: {order._id}</h3>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
