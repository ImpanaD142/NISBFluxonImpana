import React from 'react';

const AdminPanel = () => {
  const actions = [
    { id: 1, title: 'Approve / Deny Donations', description: 'Review and moderate new donation listings.', color: '#E0F7FA' },
    { id: 2, title: 'Manage Users', description: 'Approve users, assign roles, and handle suspicious activity.', color: '#E8F5E9' },
    { id: 3, title: 'Handle Reports', description: 'View and resolve community reports.', color: '#FFF3E0' }
  ];

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Admin Control Panel</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {actions.map(action => (
          <div key={action.id} style={{
            backgroundColor: action.color,
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '300px',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3 style={{ color: '#333' }}>{action.title}</h3>
            <p style={{ color: '#555' }}>{action.description}</p>
            <button style={{
              marginTop: '10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
