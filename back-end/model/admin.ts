import { User } from "./User";

export class Admin extends User {


    constructor(user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) {
        super(user);
    }

    

    getRole(): string {
        return 'admin';
    }
}