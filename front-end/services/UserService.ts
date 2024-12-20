const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { User } from "@/types";

export const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/users`); // Adjust the endpoint if needed
  if (!response.ok) {
      throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  //console.log(data);
  return data;
  
};

export const addUser = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) => {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorMessage = `Failed to add user: ${response.statusText}`;
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
};

const loginUser = (user: { email: string, password: string }) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
};

export default {
    addUser,
    loginUser,
    getAllUsers
};