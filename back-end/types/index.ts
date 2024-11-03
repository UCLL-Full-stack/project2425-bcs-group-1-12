

type UserInput = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    admin: boolean;
};

type ReportInput = {
    id?: string;         
    title: string;      
    date: Date;       
    content: string;    
};

export {
    UserInput,
    ReportInput
}