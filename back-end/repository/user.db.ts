import { Volunteer } from '../model/volunteer';
import { Admin } from '../model/admin';
import { User } from '../model/User';
import { Goal } from '../model/goal';


const users = [
    new Volunteer({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'StrongPassword1!',
    }),
    new Admin({
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: 'SecurePassword2@',
    }),
];

const goals: { id: string; description: string }[] = [];

const getUserById = (id: string): Volunteer | Admin => {
    
    const user = users.find((user) => user.getId() === id);
    if (!user) {
        throw Error("User does not exist");
    }
    return user;
    
};

const getUsersByRole = ({ role }: { role: string }) => {
    try {
        return users.filter((user) => user.getRole() === role);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const assignGoalToVolunteer = (id: string, goal: Goal): string => {
    const user = getUserById(id); // Предполагаем, что эта функция возвращает объект User.

    if (user instanceof Volunteer) {
        user.assignGoal(goal);
    } else {
        throw new Error('The user must be a volunteer to be assigned a goal.');
    }
    return "The goal successfuly was assigned to volunteer"
};



const deleteUserById = (id: string): void => {
    const index = users.findIndex((user) => user.getId() === id);
    if (index === -1) {
        throw new Error(`User with ID ${id} not found.`);
    }
    users.splice(index, 1);
};

const addUser = (newVolunteer: Volunteer): Volunteer => {
    users.push(newVolunteer);
    return newVolunteer;
};

const getAllUsers = (): User[] => {
    return users;
};

const getUserByEmail = (email: string): Volunteer | Admin | undefined => {
    const user = users.find((user) => user.getEmail() === email);
    return user;
};

export default {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    getUsersByRole,
    assignGoalToVolunteer,
    getUserByEmail
}


