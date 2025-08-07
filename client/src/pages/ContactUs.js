import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // You can integrate this with your backend API to store/send messages
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /><br/>
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /><br/>
        <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required /><br/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
