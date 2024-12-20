import { VolunteerType, GoalInput } from '../types';
import userDb from '../repository/user.db';
//import { PrismaClient, User, Goal } from '@prisma/client';
import { User } from '../model/User';
import { Goal } from '../model/goal';
import bcrypt from 'bcrypt';
import { AuthenticationResponse } from '../types';
import { generateJWTToken } from '../util/jwt';

const getAllUsers = async (): Promise<User[]> => {
    const usersFromDb = await userDb.getAllUsers();
    return usersFromDb.map((user) => User.from(user));
};

const addUser = async (input: VolunteerType): Promise<User> => {
    const existingUser = await userDb.getUserByEmail(input.email);
    if (existingUser) {
        throw new Error(`User with email ${input.email} already exists`);
    }

    // Хешируем пароль с использованием await
    const hashedPassword = await bcrypt.hash(input.password, 10);

    // Создаём нового пользователя с ролью VOLUNTEER
    const newUser = await userDb.addUser({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: hashedPassword,
        role: 'VOLUNTEER', // Указываем роль
    });

    return User.from(newUser);
};

const deleteUserById = async (id: string): Promise<void> => {
    await userDb.deleteUserById(id);
};

const assignGoalToVolunteer = async (id: string, input: GoalInput): Promise<string> => {
    
    const goalInstance = Goal.from({
        id: "",
        title: input.title,
        photo: "new File([''], '')",
        description: input.description,
        requiredAmount: input.targetAmount,
        currentAmount: 0,
    });

    // Преобразование экземпляра Goal в плоский объект
    const goalData = goalInstance.toObject();

    return userDb.assignGoalToVolunteer(id, goalData);
};

const authenticate = async (
    email: string,
    password: string,
  
  ): Promise<AuthenticationResponse> => {
    // 1. Get user by username
    const user = await userDb.getUserByEmail(email);
    if (!user) {
      throw new Error(`User with username: ${email} does not exist.`);
    }
  
    // 2. Compare entered password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid info');
    }

    const role = user.role;
  
    // 3. Generate JWT token
    const token = generateJWTToken(email, role);
  
    // 4. Return the authentication response
    const authResponse: AuthenticationResponse = {
      message: 'Authentication successful.',
      token,
      username: user.email,
      fullname: `${user.firstName} ${user.lastName}`,
      role: role,
    };
  
    return authResponse;
  };

export default {
    getAllUsers,
    addUser,
    deleteUserById,
    assignGoalToVolunteer,
    authenticate
};
