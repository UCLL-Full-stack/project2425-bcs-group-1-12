import { Volunteer } from '../model/volunteer';
import { VolunteerType } from '../types';
import userDb from '../repository/user.db';
import { User } from '../model/User';
import { GoalInput } from '../types';
import { Goal } from '../model/goal';
import bcrypt from 'bcrypt';

const getAllUsers = (): User[] => {
    return userDb.getAllUsers();
};


const addUser = async (input: VolunteerType): Promise<Volunteer> => {

    const existingUser = userDb.getUserByEmail(input.email);
    if (existingUser) {
        throw new Error(`User with email ${input.email} already exists`);
    }

    // Хешируем пароль с использованием await
    const hashedPassword = await bcrypt.hash(input.password, 10);

    const newVolunteer = new Volunteer({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: hashedPassword, // Здесь теперь получаем строку, а не промис
    });

    // Добавление нового пользователя в базу данных (или другую логику)
    userDb.addUser(newVolunteer);

    return newVolunteer;
};

const deleteUserById = (id: string): void => {
    userDb.deleteUserById(id);
};

const assignGoalToVolunteer = (id:string, input: GoalInput): string => {
    const goal = new Goal({
        title: input.title,
        photo: new File([], ""),
        description: input.description,
        requiredAmount: input.targetAmount
    });
    return userDb.assignGoalToVolunteer(id, goal);
};

export default {
    getAllUsers,
    addUser,
    deleteUserById,
    assignGoalToVolunteer
};