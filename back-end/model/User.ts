import { v4 as uuidv4 } from 'uuid';

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
        if (!this.isStrongPassword(user.password)) {
            throw new Error(
                'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.'
            );
        }
    }

    private isValidEmail(email: string): boolean {
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private isStrongPassword(password: string): boolean {
        // At least 8 characters, one uppercase, one lowercase, one number, and one special character
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    abstract getRole(): string;
}
