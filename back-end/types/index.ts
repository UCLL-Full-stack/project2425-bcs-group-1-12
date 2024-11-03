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

type ReportInput = {
    id: number;
    title: string;
    content: string;
    date: Date;

}

export {
    UserInput,
    AccountInput,
    ReportInput,
}