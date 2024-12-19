type UserInput = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type GoalInput = {
    id?: string;
    title: string;
    photo: string; // Здесь вместо File используется строка
    description: string;
    targetAmount: number,
    currentAmount: number
}


type AccountInput = {
    id: number;
    user: UserInput;
    admin: boolean;
}



export {
    UserInput,
    AccountInput,
    GoalInput
}