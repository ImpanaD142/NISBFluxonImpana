import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p>Name: John Doe</p>
      <p>Location: Bangalore</p>
      <p>Email: john@example.com</p>
      <h3 className="mt-4 font-semibold">Past Donations</h3>
      <ul className="list-disc list-inside">
        <li>Books to local library</li>
        <li>Winter jacket to school children</li>
      </ul>
    </div>
  );
};

export default Profile;
