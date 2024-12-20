import { Goal } from '../model/goal';
import GoalDB from '../repository/goal.db';
import { v4 as uuidv4 } from 'uuid';
import { GoalInput } from '../types';

const getAllGoals = async (): Promise<Goal[]> => {
    return await GoalDB.getAllGoals();
};

const addGoal = async (input: GoalInput): Promise<Goal> => {
    // Проверяем, если у объекта нет id, то генерируем и устанавливаем его
    

    // Create a new Goal object
    const newGoal = new Goal({
        title: input.title,
        photo: new File([input.photo], 'goal_photo', { type: 'image/png' }), // Assuming photo is a string
        description: input.description,
        requiredAmount: input.targetAmount,
    });

    return await GoalDB.addGoal(newGoal); // Сохраняем цель в базе данных
};

const deleteGoalById = async (id: string): Promise<void> => {
    await GoalDB.deleteGoalById(id);
};

const getGoalById = async (id: string): Promise<Goal> => {
    const result = await GoalDB.getGoalById(id);
    if (!result) {
        throw Error(`There is no goal with given id: ${id}`);
    } else
    return result;
};

const updateGoalById = async (id: string, updatedGoalData: { title: string; photo: File; description: string; requiredAmount: number }): Promise<Goal> => {
    //const result = getGoalById(id);
    return await GoalDB.updateGoalById(id, updatedGoalData);
}

export default {
    getAllGoals,
    getGoalById,
    deleteGoalById,
    addGoal,
    updateGoalById
};




