import React, { useState } from 'react';
import { addGoal } from '@/services/GoalService';
import styles from '@/components/goal_adding-style';

const AddGoalPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetAmount, setTargetAmount] = useState<number>(1); // Установлено значение по умолчанию
  const [currentAmount, setCurrentAmount] = useState<number>(0);
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка перед отправкой
    if (targetAmount <= 0) {
      setError('Required amount must be greater than zero.');
      setSuccessMessage('');
      return;
    }

    const goalData = {
      title,
      description,
      targetAmount,
      currentAmount,
      photo,
    };

    try {
      const newGoal = await addGoal(goalData);
      setSuccessMessage(`Goal added successfully: ${newGoal.title}`);
      setError('');
      // Сброс формы
      setTitle('');
      setDescription('');
      setTargetAmount(1);
      setCurrentAmount(0);
      setPhoto('');
    } catch (error) {
      setError((error as Error).message);
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1 style={styles.heading}>Add a New Goal</h1>

      {/* Ошибка при добавлении */}
      {error && <p style={styles.errorText}>{error}</p>}

      {/* Сообщение об успехе */}
      {successMessage && <p style={styles.successText}>{successMessage}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>Goal Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="description" style={styles.label}>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="targetAmount" style={styles.label}>Required Amount:</label>
          <input
            type="number"
            id="targetAmount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(Number(e.target.value))}
            required
            style={styles.input}
            min={1} // Ограничение на уровне HTML
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="currentAmount" style={styles.label}>Current Amount:</label>
          <input
            type="number"
            id="currentAmount"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(Number(e.target.value))}
            required
            style={styles.input}
            min={0} // Ограничение на уровне HTML
          />
        </div>
        <button type="submit" style={styles.button}>Add Goal</button>
      </form>
    </div>
  );
};

export default AddGoalPage;
