import { PrismaClient, Role, Volunteer, Admin, User, Goal } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsers = async (): Promise<User[]> => {
    return prisma.user.findMany();
};

const getUserById = async (id: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    if (!user) {
        throw new Error(`User with ID ${id} not found.`);
    }
    return user;
};

const addUser = async (userData: Omit<User, 'id'>): Promise<User> => {
    return prisma.user.create({
        data: userData,
    });
};

const deleteUserById = async (id: string): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    if (!user) {
        throw new Error(`User with ID ${id} not found.`);
    }
    await prisma.user.delete({
        where: { id },
    });
};

const getUsersByRole = async (role: Role): Promise<User[]> => {
    return prisma.user.findMany({
        where: { role },
    });
};

const getUserByEmail = async (email: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: { email },
    });
};

const assignGoalToVolunteer = async (volunteerId: string, goalData: Omit<Goal, 'id'>): Promise<string> => {
    const volunteer = await prisma.volunteer.findUnique({
        where: { id: volunteerId },
        include: { user: true },
    });

    if (!volunteer) {
        throw new Error('The user must be a volunteer to be assigned a goal.');
    }

    const goal = await prisma.goal.create({
        data: {
            ...goalData,
            volunteerGoals: {
                connect: [{ id: volunteerId }],
            },
        },
    });

    return `The goal "${goal.title}" was successfully assigned to volunteer.`;
};

export default {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    getUsersByRole,
    getUserByEmail,
    assignGoalToVolunteer,
};
