

export type StatusMessage = {
    message: string;
    type: "error" | "success";
};

export type User = {
    firstName?: string;
    lastName?: string;
    fullname?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
};

