import { Goal } from '../model/goal';
import GoalDB from '../repository/goal.db';
import { v4 as uuidv4 } from 'uuid';
import { GoalInput } from '../types';

const getAllGoals = (): Goal[] => {
    return GoalDB.getAllGoals();
};

const addGoal = (input: GoalInput): Goal => {
    // Проверяем, если у объекта нет id, то генерируем и устанавливаем его
    if (!input.title?.trim()) {
        throw new Error('Title is required.');
    }

    // Validate Photo
    /*if (!input.photo?.trim()) {
        throw new Error('Photo URL is required.');
    }*/

    // Validate Description
    if (!input.description?.trim()) {
        throw new Error('Description is required.');
    }

    // Validate Required Amount
    if (!input.targetAmount || input.targetAmount <= 0) {
        throw new Error('Required amount must be greater than zero.');
    }

    // Create a new Goal object
    const newGoal = new Goal({
        title: input.title,
        photo: new File([input.photo], 'goal_photo', { type: 'image/png' }), // Assuming photo is a string
        description: input.description,
        requiredAmount: input.targetAmount,
    });

    return GoalDB.addGoal(newGoal); // Сохраняем цель в базе данных
};

const deleteGoalById = (id: string): void => {
    GoalDB.deleteGoalById(id);
};

const getGoalById = (id: string): Goal => {
    const result = GoalDB.getGoalById(id);
    if (!result) {
        throw Error(`There is no goal with given id: ${id}`);
    } else
    return result;
};

const updateGoalById = (id: string, updatedGoalData: { title: string; photo: File; description: string; requiredAmount: number }): Goal => {
    //const result = getGoalById(id);
    return GoalDB.updateGoalById(id, updatedGoalData);
}

export default {
    getAllGoals,
    getGoalById,
    deleteGoalById,
    addGoal,
    updateGoalById
};




