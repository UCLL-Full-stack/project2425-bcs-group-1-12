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




export default {
    getAllGoals
};