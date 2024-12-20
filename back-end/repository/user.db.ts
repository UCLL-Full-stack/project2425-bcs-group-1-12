import { Volunteer } from '../model/volunteer';
import { Admin } from '../model/admin';
import { User } from '../model/User';
import { Goal } from '../model/goal';
import database from './database';


import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
        throw new Error("User does not exist");
    }
    return user;
};

const getUsersByRole = async ({ role }: { role: Role }) => {
    try {
        return await prisma.user.findMany({ where: { role } });
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const assignGoalToVolunteer = async (id: string, goalId: string) => {
    const user = await prisma.user.findUnique({
        where: { id },
        include: { Volunteer: true },
    });

    if (!user || user.role !== 'VOLUNTEER') {
        throw new Error('The user must be a volunteer to be assigned a goal.');
    }

    if (!user.Volunteer) {
        throw new Error('Volunteer information is missing for this user.');
    }

    await prisma.volunteer.update({
        where: { id: user.Volunteer.id },
        data: {
            goals: {
                connect: { id: goalId },
            },
        },
    });

    return "The goal successfully was assigned to volunteer";
};

const deleteUserById = async (id: string): Promise<void> => {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
        throw new Error(`User with ID ${id} not found.`);
    }
    await prisma.user.delete({ where: { id } });
};

const addUser = async (newUser: { firstName: string; lastName: string; email: string; password: string; role: Role }) => {
    return await prisma.user.create({ data: newUser });
};

const getAllUsers = async () => {
    return await prisma.user.findMany();
};

const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({ where: { email } });
};

export default {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    getUsersByRole,
    assignGoalToVolunteer,
    getUserByEmail,
};


