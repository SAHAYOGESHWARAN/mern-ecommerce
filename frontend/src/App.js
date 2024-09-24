import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'; 
import Products from './components/Products'; // Import Products component

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* Home page route */}
        <Route path="/" exact component={HomePage} />

        {/* Login page route */}
        <Route path="/login" component={LoginPage} />

        {/* Product detail page, dynamic route to get product by ID */}
        <Route path="/products/:id" component={ProductDetail} />

        {/* Cart page route */}
        <Route path="/cart" component={Cart} /> 

        {/* Products page route */}
        <Route path="/products" component={Products} /> {/* Add the products route here */}
      </Switch>
    </Router>
  );
};

export default App;
