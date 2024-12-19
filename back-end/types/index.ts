//import { Goal } from "../model/goal";

type UserInput = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type VolunteerType = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    //goals: Goal[];
}

type GoalInput = {
    id?: string;
    title: string;
    photo: string; 
    description: string;
    targetAmount: number,
    currentAmount: number
}

type ReportInput = {
    id?: string;
    title: string;
    date?: Date; 
    summary: string;
    file: string; 
};



type AccountInput = {
    id: number;
    user: UserInput;
    admin: boolean;
}



export {
    UserInput,
    AccountInput,
    GoalInput,
    ReportInput
}