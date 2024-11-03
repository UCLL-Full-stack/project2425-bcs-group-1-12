type UserInput = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type AccountInput = {
    id: number;
    user: UserInput;
    admin: boolean;
}



export {
    UserInput,
    AccountInput,
}