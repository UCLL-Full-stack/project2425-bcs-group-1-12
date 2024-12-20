import { v4 as uuidv4 } from 'uuid';
import { User as UserPrisma } from '@prisma/client';

export abstract class User {
    private id: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;

    constructor(user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) {
        this.validate(user);

        this.id = uuidv4(); // Generation of unique ID
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
    }

    static from(userPrisma: UserPrisma): User {
        const user = new ConcreteUser({
            firstName: userPrisma.firstName,
            lastName: userPrisma.lastName,
            email: userPrisma.email,
            password: userPrisma.password,
        });
        user.id = userPrisma.id; // Assign the ID from Prisma directly
        return user;
    }

    getId(): string {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    validate(user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) {
        if (!user.firstName?.trim()) {
            throw new Error('First name is required');
        }
        if (!user.lastName?.trim()) {
            throw new Error('Last name is required');
        }
        if (!user.email?.trim()) {
            throw new Error('Email is required');
        }
        if (!this.isValidEmail(user.email)) {
            throw new Error('Invalid email format');
        }
        if (!user.password?.trim()) {
            throw new Error('Password is required');
        }
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    abstract getRole(): string;
}

class ConcreteUser extends User {
    getRole(): string {
        return 'USER';
    }
}
