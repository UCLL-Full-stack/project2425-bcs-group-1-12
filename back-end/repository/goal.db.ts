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

// Update goal
export const updateGoalById = (id: string, updatedGoalData: { title: string; photo: File; description: string; requiredAmount: number }): Goal => {
    const goal = goals.find((goal) => goal.getId() === id);
    if (!goal) {
        throw new Error(`Goal with ID ${id} not found.`);
    }

    // Теперь мы заменяем все поля
    goal.setTitle(updatedGoalData.title);
    goal.setPhoto(updatedGoalData.photo);
    goal.setDescription(updatedGoalData.description);
    goal.setRequiredAmount(updatedGoalData.requiredAmount);

    return goal;
};

export default {
    getAllGoals,
    deleteGoalById,
    getGoalById,
    addGoal,
    updateGoalById
};
