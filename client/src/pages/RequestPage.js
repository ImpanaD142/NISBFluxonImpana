import React from 'react';
import axios from 'axios';
import laptopImg from '../assets/laptop.png';
import jacketImg from '../assets/jacket.jpg';

const RequestPage = () => {
  const items = [
    { id: 1, title: 'Laptop', description: 'Used, good condition', image: laptopImg, status: 'Available' },
    { id: 2, title: 'Jacket', description: 'Winter wear, new', image: jacketImg, status: 'Available' }
  ];

  const handleRequest = async (itemId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/request', {
        itemId,
        userId: 'mock-user-id' // Replace with actual user ID
      });
      alert(response.data.message);
    } catch (err) {
      alert('Request failed');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Request Items</h2>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <img src={item.image} alt={item.title} width="150" />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <button onClick={() => handleRequest(item.id)}>Request this item</button>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
};

export default RequestPage;

