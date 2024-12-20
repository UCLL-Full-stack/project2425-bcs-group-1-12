import { User } from "./User";
import { User as UserPrisma } from '@prisma/client';

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

    static from(userPrisma: UserPrisma): Admin {
        return new Admin({
            firstName: userPrisma.firstName,
            lastName: userPrisma.lastName,
            email: userPrisma.email,
            password: userPrisma.password,
        });
    }
}