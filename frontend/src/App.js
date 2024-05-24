import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navi from './Navi';
import Home from './Home';
import Register from './Register';
import SignIn from './SignIn';
import Cart from './Cart';
import ProductSelection from './Product';
import Core from './Core';
import Creater from './Creater';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import CustomerCare from './CustomerCare';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/product" element={<ProductSelection addToCart={addToCart} />} />
        <Route path="/core" element={<Core addToCart={addToCart} />} />
        <Route path="/creater" element={<Creater addToCart={addToCart} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/customer-care" element={<CustomerCare />} />
      </Routes>
    </Router>
  );
};

export default App;
