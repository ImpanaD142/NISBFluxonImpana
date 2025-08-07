import React from 'react';
import './Navbar.css'; // Ensure you have this file

const Navabr = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/donate">Donate</a>
        <a href="/profile">Profile</a>
        <a href="/listings">Listings</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/community">Community</a>
        <a href="/request">Request</a>
        <a href="/admin">Admin</a>
        <a href="/about">About</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">Contact</a>
        <a href="/history">History</a>
      </nav>
    </div>
  );
};

export default Navabr;


