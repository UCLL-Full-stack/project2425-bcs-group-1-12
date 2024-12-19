const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllReports = async () => {
  const response = await fetch(`${API_URL}/reports`); // Adjust the endpoint if needed
  if (!response.ok) {
      throw new Error('Failed to fetch reports');
  }
  const data = await response.json();
  return data;
};


export default  {
    getAllReports
}