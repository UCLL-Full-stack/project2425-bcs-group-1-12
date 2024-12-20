type UserInput = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
};

type AccountInput = {
    id?: number;
    user?: UserInput;
    admin?: boolean;
};

type MedicalCaseInput = {
    id?: number;
    patient?: PatientInput;
    description?: string;
    open?: Date;
    close?: Date;
    costBDT?: number;
    costUSD?: number;
    paidBDT?: number;
};

type PatientInput = {
    id?: number;
    caseId?: number;
    firstName?: string;
    lastName?: string;
    age?: number;
    gender?: string;
    illness?: string;
    status?: string;
};

export {
    UserInput,
    AccountInput,
    MedicalCaseInput,
    PatientInput,
};