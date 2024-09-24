
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'; 


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} /> 
      </Switch>
    </Router>
  );
};

export default App;
