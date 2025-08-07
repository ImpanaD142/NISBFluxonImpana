import React, { useState } from 'react';

const DonationForm = () => {
  const [itemData, setItemData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    availability: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleImageChange = (e) => {
    setItemData({ ...itemData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', itemData.title);
      formData.append('description', itemData.description);
      formData.append('category', itemData.category);
      formData.append('condition', itemData.condition);
      formData.append('availability', itemData.availability);
      formData.append('image', itemData.image); // file upload

      const response = await fetch('http://localhost:5000/api/donations', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert('Item donated successfully!');
        // Reset form
        setItemData({
          title: '',
          description: '',
          category: '',
          condition: '',
          availability: '',
          image: null
        });
      } else {
        alert(data.error || 'Donation failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to server');
    }
  };

  return (
    <div className="donate-form-container">
      <h2>Donate Item</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Item Title"
          name="title"
          value={itemData.title}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          value={itemData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={itemData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Condition"
          name="condition"
          value={itemData.condition}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Pickup Availability"
          name="availability"
          value={itemData.availability}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonationForm;


