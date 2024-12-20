const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

export default {
    addUser,
};