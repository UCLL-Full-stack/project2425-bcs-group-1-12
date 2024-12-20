import { PrismaClient, Goal } from '@prisma/client';

const prisma = new PrismaClient();

// Adding Goal
export const addGoal = async (goal: { title: string; photo: string; description: string; requiredAmount: number }): Promise<Goal> => {
    return await prisma.goal.create({
        data: goal,
    });
};

// Get goal by ID
export const getGoalById = async (id: string): Promise<Goal | null> => {
    return await prisma.goal.findUnique({
        where: { id },
    });
};

// Delete goal
export const deleteGoalById = async (id: string): Promise<void> => {
    const goal = await prisma.goal.findUnique({ where: { id } });
    if (!goal) {
        throw new Error(`Goal with ID ${id} not found.`);
    }
    await prisma.goal.delete({ where: { id } });
};

// Get all goals
export const getAllGoals = async (): Promise<Goal[]> => {
    return await prisma.goal.findMany();
};

// Update goal
export const updateGoalById = async (id: string, updatedGoalData: { title: string; photo: string; description: string; requiredAmount: number }): Promise<Goal> => {
    const goal = await prisma.goal.findUnique({ where: { id } });
    if (!goal) {
        throw new Error(`Goal with ID ${id} not found.`);
    }

    return await prisma.goal.update({
        where: { id },
        data: updatedGoalData,
    });
};