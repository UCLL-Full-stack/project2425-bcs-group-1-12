// components/users/UserOverviewCards.tsx

import React from 'react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

type Props = {
  users: User[];
};

const UserOverviewCards: React.FC<Props> = ({ users }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '10px',
            padding: '15px',
            width: '250px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>
            {user.firstName} {user.lastName}
          </h2>
          <p style={{ fontSize: '0.9em', color: '#ccc', marginBottom: '10px' }}>
            Email: {user.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserOverviewCards;
