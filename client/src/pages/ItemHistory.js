import React from 'react';

const ItemHistory = () => {
  const donations = [
    { title: 'Books', status: 'Delivered' },
    { title: 'Blanket', status: 'Pending' }
  ];

  const requests = [
    { title: 'Shoes', status: 'Approved' },
    { title: 'Laptop', status: 'Denied' }
  ];

  return (
    <div>
      <h2>Item History</h2>
      <h3>Donated Items</h3>
      <ul>
        {donations.map((item, idx) => <li key={idx}>{item.title} - {item.status}</li>)}
      </ul>

      <h3>Requested Items</h3>
      <ul>
        {requests.map((item, idx) => <li key={idx}>{item.title} - {item.status}</li>)}
      </ul>
    </div>
  );
};

export default ItemHistory;
