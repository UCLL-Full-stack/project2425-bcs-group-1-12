import { User } from "./user";

export class Account {
    private id: number;
    private user: User;
    private admin: boolean;

    constructor(account: {
        id: number;
        user: User;
        admin: boolean;
    }) {
        this.validate(account);

        this.id = account.id;
        this.user = account.user;
        this.admin = account.admin;
    }

    getID(): number {
        return this.id
    }
    getUser(): User {
        return this.user
    }
    getAdmin(): boolean {
        return this.admin
    }

    validate(account: {
        id: number;
        user: User;
        admin: boolean;
    }) {
        if (!account.id) {
            throw new Error('Account ID is required')
        }
        if (!account.user) {
            throw new Error('User is required')
        }
        if (account.admin === undefined) {
            throw new Error('Role is required')
        }
    }
}