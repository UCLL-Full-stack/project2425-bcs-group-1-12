import { Volunteer } from '../model/volunteer';
import { VolunteerType } from '../types';
import userDb from '../repository/user.db';
import { User } from '../model/User';
import { GoalInput } from '../types';
import { Goal } from '../model/goal';

const getAllUsers = (): User[] => {
    return userDb.getAllUsers();
};


const addUser = (input: VolunteerType): Volunteer => {
    const newVolunteer = new Volunteer({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: input.password,

    })

    return userDb.addUser(newVolunteer);
    
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