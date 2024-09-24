
import React, { useEffect, useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await fetch('http://localhost:5000/api/wishlist', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setWishlist(data.products);
    };
    fetchWishlist();
  }, []);

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
