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
  //selectGoal: (goal: Goal) => void;
}

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
          //onClick={() => selectGoal(goal)}
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
            cursor: 'pointer', // Добавляем указатель для визуального эффекта
          }}
          role="button"
        >
          <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>{goal.title}</h2>
          <p style={{ fontSize: '0.9em', color: '#ccc', marginBottom: '10px' }}>
            {goal.description}
          </p>
          <p style={{ fontSize: '0.9em', color: '#ccc' }}>
            Raised: {goal.currentAmount} / {goal.requiredAmount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GoalOverviewCards;
