import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import './style.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2024 Password Manager. All rights reserved. <a href="/about">About Us</a></p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
