import React, { useEffect } from 'react';

const Products = () => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      if (products) {
        console.log(products);
      } else {
        console.log("No products found");
      }
    };

    getProducts();
  }, []);

  return <div>Products Component</div>;
};

export default Products;
