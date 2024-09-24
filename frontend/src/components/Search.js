
import React, { useState } from 'react';
import Product from './Product';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/search?q=${query}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Search;
