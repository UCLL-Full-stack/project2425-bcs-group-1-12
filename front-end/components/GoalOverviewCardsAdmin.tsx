// components/goals/GoalOverviewCards.tsx

import React from 'react';

interface Goal {
  id: string;
  title: string;
  description: string;
  requiredAmount: number;
  currentAmount: number;
}

type Props = {
  goals: Goal[];
};

const GoalOverviewCards: React.FC<Props> = ({ goals }) => {
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
      {goals.map((goal) => (
        <div
          key={goal.id}
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
            height: '300px', // Ensure enough space for buttons
          }}
        >
          <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>{goal.title}</h2>
          <p style={{ fontSize: '0.9em', color: '#ccc', marginBottom: '10px' }}>
            {goal.description}
          </p>
          
          <p style={{ fontSize: '0.9em', color: '#ccc' }}>
            Raised: {goal.currentAmount} / {goal.requiredAmount}
          </p>
          <p>Something!</p>
          {/* Buttons for editing and deleting */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              gap: '10px', // Add space between buttons
            }}
          >
            <button
              style={{
                backgroundColor: 'blue',
                color: '#fff',
                border: 'none',
                padding: '8px 16px', // Increase button size for better visibility
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '0.9em', // Adjust font size
              }}
              onClick={() => {
                console.log(`Edit goal ${goal.id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{
                backgroundColor: 'red',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '0.9em',
              }}
              onClick={() => {
                console.log(`Delete goal ${goal.id}`);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoalOverviewCards;
