import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', role: 'donor', location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Registered Successfully');
        setFormData({ name: '', email: '', password: '', role: 'donor', location: '' }); // reset
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      alert('Error connecting to server');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold text-center">Register</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border" />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border" />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border" />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border" />
      <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border">
        <option value="donor">Donor</option>
        <option value="recipient">Recipient</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</button>
    </form>
  );
};

export default Register;


