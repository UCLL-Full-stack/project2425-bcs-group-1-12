import { Goal } from '../model/goal';
import GoalDB from '../repository/goal.db';

const getAllGoals = (): Goal[] => {
    return GoalDB.getAllGoals();
};

const addGoal = (goal: Goal): Goal => {
    return GoalDB.addGoal(goal);
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

export default {
    getAllGoals,
    getGoalById,
    deleteGoalById,
    addGoal
};




