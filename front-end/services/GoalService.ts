const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllGoals = async () => {
  const response = await fetch(`${API_URL}/goals`); // Adjust the endpoint if needed
  if (!response.ok) {
      throw new Error('Failed to fetch goals');
  }
  const data = await response.json();
  //console.log(data);
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




export default {
    getAllGoals,
    getGoalById
};