import { Goal } from '../model/goal';

const goal1 = new Goal({
    title: "Help Children with Education",
    photo: new File([], ""),  // Место для фото, но пока не используем
    description: "Providing books and school supplies to children in need.",
    requiredAmount: 10000,
});

const goal2 = new Goal({
    title: "Build a Community Well",
    photo: new File([], ""),  // Место для фото, но пока не используем
    description: "Constructing a well to provide clean drinking water for a village.",
    requiredAmount: 15000,
});

const goal3 = new Goal({
    title: "Medical Support for Refugees",
    photo: new File([], ""),  // Место для фото, но пока не используем
    description: "Providing medical assistance and supplies to refugees.",
    requiredAmount: 20000,
});

// Добавляем цели в список
const goals = [goal1, goal2, goal3];

// adding Goal
export const addGoal = (goal: Goal): Goal => {
    goals.push(goal);
    return goal;
};

// Get goal by ID
export const getGoalById = (id: string): Goal | null => {
    return goals.find((goal) => goal.getId() === id) || null;
};

// Delete goal
export const deleteGoalById = (id: string): void => {
    const index = goals.findIndex((goal) => goal.getId() === id);
    if (index === -1) {
        throw new Error(`Goal with ID ${id} not found.`);
    }
    goals.splice(index, 1);
};

// Get all goals
export const getAllGoals = (): Goal[] => {
    return goals;
};

export default {
    getAllGoals,
    deleteGoalById,
    getGoalById,
    addGoal
};
