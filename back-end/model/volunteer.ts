import { User } from "./User";
import { Goal } from "./goal";
import { User as UserPrisma } from '@prisma/client';

export class Volunteer extends User {
    private goals: Goal[]; // Volunteer can be assigned to goal

    constructor(user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) {
        super(user);
        this.goals = [];
    }

    assignGoal(goal: Goal): void {
        this.goals.push(goal);
    }

    getAssignedGoals(): Goal[] {
        return this.goals;
    }

    getRole(): string {
        return 'volunteer';
    }

    static from(userPrisma: UserPrisma): Volunteer {
        return new Volunteer({
            firstName: userPrisma.firstName,
            lastName: userPrisma.lastName,
            email: userPrisma.email,
            password: userPrisma.password,
        });
    }
}