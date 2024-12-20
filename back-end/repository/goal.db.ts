import { PrismaClient } from '@prisma/client';
import { Goal } from '../model/goal';

const prisma = new PrismaClient();

// Добавляем цель в базу данных
export const addGoal = async (goal: Goal): Promise<Goal> => {
    const newGoal = await prisma.goal.create({
        data: {
            title: goal.getTitle(),
            description: goal.getDescription(),
            requiredAmount: goal.getRequiredAmount(),
            currentAmount: goal.getCurrentAmount(),
        },
    });

    // Создаем объект Goal на основе полученных данных
    return new Goal({
        title: newGoal.title,
        photo: new File([], newGoal.photo || ""),  // Здесь предполагается, что в базе данных будет строка с именем файла
        description: newGoal.description,
        requiredAmount: newGoal.requiredAmount,
    });


};

// Получить цель по ID
export const getGoalById = async (id: string): Promise<Goal | null> => {
    const goalData = await prisma.goal.findUnique({
        where: { id },
    });

    if (!goalData) {
        return null;
    }

    // Возвращаем объект Goal
    return new Goal({
        title: goalData.title,
        photo: new File([], goalData.photo || ""),
        description: goalData.description,
        requiredAmount: goalData.requiredAmount,
    });
};

// Удалить цель по ID
export const deleteGoalById = async (id: string): Promise<void> => {
    const goal = await prisma.goal.delete({
        where: { id },
    });

    if (!goal) {
        throw new Error(`Goal with ID ${id} not found.`);
    }
};

// Получить все цели
export const getAllGoals = async (): Promise<Goal[]> => {
    const goalsData = await prisma.goal.findMany();

    return goalsData.map((goalData) => new Goal({
        title: goalData.title,
        photo: new File([], goalData.photo || ""),
        description: goalData.description,
        requiredAmount: goalData.requiredAmount,
    }));
};

// Обновить цель по ID
export const updateGoalById = async (id: string, updatedGoalData: { title: string; photo: File; description: string; requiredAmount: number }): Promise<Goal> => {
    const goal = await prisma.goal.update({
        where: { id },
        data: {
            title: updatedGoalData.title,
            photo: updatedGoalData.photo ? updatedGoalData.photo.name : null, // Если photo присутствует
            description: updatedGoalData.description,
            requiredAmount: updatedGoalData.requiredAmount,
        },
    });

    // Возвращаем обновленный объект Goal
    return new Goal({
        title: goal.title,
        photo: new File([], goal.photo || ""),
        description: goal.description,
        requiredAmount: goal.requiredAmount,
    });
};

export default {
    getAllGoals,
    deleteGoalById,
    getGoalById,
    addGoal,
    updateGoalById,
};
