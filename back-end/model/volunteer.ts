import { User } from "./user";

export class Volunteer extends User {
    private goals: string[]; // Volunteer can be assigned to goal

    constructor(user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) {
        super(user);
        this.goals = [];
    }

    assignGoal(goal: string): void {
        this.goals.push(goal);
    }

    getAssignedGoals(): string[] {
        return this.goals;
    }

    getRole(): string {
        return 'volunteer';
    }
}