const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllGoals = async () => {
  const response = await fetch(`${API_URL}/goals`); // Adjust the endpoint if needed
  if (!response.ok) {
      throw new Error('Failed to fetch goals');
  }
  const data = await response.json();
  console.log(data);
  return data;
  
};

export const getGoalById = async (id: string) => {
  const response = await fetch(`${API_URL}/goals/${id}`); // Make sure the endpoint matches your API
  if (!response.ok) {
      throw new Error('Failed to fetch goal');
  }
  const goal = await response.json();
  return goal;
};

export const addGoal = async (goalData: {
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  photo: string;
}) => {
  const response = await fetch(`${API_URL}/goals`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(goalData),
  });

  if (!response.ok) {
      const errorMessage = `Failed to add goal: ${response.statusText}`;
      throw new Error(errorMessage);
  }

  const data = await response.json();
  return data;
};

export const updateGoal = async (id: string, goalData: {
  name: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  photo: string;
}) => {
  const response = await fetch(`${API_URL}/goals/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(goalData),
  });

  if (!response.ok) {
      const errorMessage = `Failed to update goal: ${response.statusText}`;
      throw new Error(errorMessage);
  }

  const data = await response.json();
  return data;
};

export const deleteGoal = async (id: string) => {
  const response = await fetch(`${API_URL}/goals/${id}`, {
      method: 'DELETE',
  });

  if (!response.ok) {
      const errorMessage = `Failed to delete goal: ${response.statusText}`;
      throw new Error(errorMessage);
  }

  const data = await response.json();
  return data;
};




export default {
    getAllGoals,
    getGoalById,
    addGoal,
    deleteGoal
};