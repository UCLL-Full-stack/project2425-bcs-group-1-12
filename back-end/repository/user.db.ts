import { Volunteer } from '../model/volunteer';
import { Admin } from '../model/admin';

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

const getUserById = ({ id }: { id: string }) => {
    try {
        return users.find((user) => user.getId() === id) || null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getUsersByRole = ({ role }: { role: string }) => {
    try {
        return users.filter((user) => user.getRole() === role);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const addUser = (user: Volunteer | Admin) => {
    if (!(user instanceof Volunteer || user instanceof Admin)) {
        throw new Error('Invalid user type. User must be an instance of Volunteer or Admin.');
    }
    users.push(user);
};

const deleteUserById = ({ id }: { id: string }) => {
    const index = users.findIndex((user) => user.getId() === id);
    if (index === -1) {
        throw new Error(`User with ID ${id} not found.`);
    }
    users.splice(index, 1);
};

// Add a new goal (Admin only)
const addGoal = ({ adminId, goal }: { adminId: string; goal: { id: string; description: string } }) => {
    const admin = getUserById({ id: adminId });
    if (!admin || admin.getRole() !== 'admin') {
        throw new Error('Only admins can add goals.');
    }
    goals.push(goal);
};

// Assign a goal to a volunteer
const assignGoalToVolunteer = ({ volunteerId, goalId }: { volunteerId: string; goalId: string }) => {
    const volunteer = getUserById({ id: volunteerId });
    if (!volunteer || volunteer.getRole() !== 'volunteer') {
        throw new Error('User must be a volunteer to assign goals.');
    }

    const goal = goals.find((g) => g.id === goalId);
    if (!goal) {
        throw new Error(`Goal with ID ${goalId} not found.`);
    }

    (volunteer as Volunteer).assignGoal(goal.description);
};

// Get all goals
const getAllGoals = () => {
    return goals;
};

export default {
    getUserById,
    getUsersByRole,
    addUser,
    deleteUserById,
    addGoal,
    assignGoalToVolunteer,
    getAllGoals,
};
