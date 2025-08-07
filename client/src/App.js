import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navabr';
import Home from './pages/Home';
import Register from './pages/Register';
import DonationForm from './components/DonationForm';
import Profile from './pages/Profile';
import Listings from './pages/Listings';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import RequestPage from './pages/RequestPage';
import AdminPanel from './pages/AdminPanel';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import ItemHistory from './pages/ItemHistory';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donate" element={<DonationForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/request" element={<RequestPage />} />
    <Route path="/admin" element={<AdminPanel />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/history" element={<ItemHistory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

