import React from 'react';

const Listings = () => {
  return (
    <div>
        
        
      <h2 className="text-2xl font-bold mb-4">Available Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded bg-white">
          <h3 className="font-semibold">Winter Jacket</h3>
          <p>Condition: Good</p>
          <p>Category: Clothes</p>
          <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">Request</button>
        </div>
        <div className="p-4 border rounded bg-white">
          <h3 className="font-semibold">Textbooks</h3>
          <p>Condition: Like New</p>
          <p>Category: Books</p>
          <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">Request</button>
        </div>
      </div>
    </div>
  );
};

export default Listings;
