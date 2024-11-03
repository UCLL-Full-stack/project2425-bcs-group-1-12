export class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private admin: boolean;

    constructor(user: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        admin: boolean;
    }) {
        this.validate(user);

        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.admin = user.admin;
    }

    getId(): number {
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
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        admin: boolean;
    }) {
        if (!user.id) {
            throw new Error('User ID is required');
        }
        if (!user.firstName?.trim()) {
            throw new Error('First name is required');
        }
        if (!user.lastName?.trim()) {
            throw new Error('Last name is required');
        }
        if (!user.email?.trim()) {
            throw new Error('Email is required');
        }
        if (!user.password?.trim()) {
            throw new Error('Password is required');
        }
        if (!user.admin) {
            throw new Error('User role is required');
        }
    }

}