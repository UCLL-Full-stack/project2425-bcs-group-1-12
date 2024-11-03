import { User } from '../model/User';

const users: User[] = [
    new User({
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123', 
        admin: true,
    }),
    new User({
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: 'password123', 
        admin: false,
    }),
];


const getUserByEmail = (email: string): User | null => {
    return users.find(user => user.getEmail() === email) || null;
};

//console.log(getUserByEmail('john@example.com'));


export default {
    getUserByEmail,
};