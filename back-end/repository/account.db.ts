/*import { Account } from '../model/account'
import { User } from '../model/user';

const accounts: Account[] = [];

const testUser = new User({
    id: 3,
    firstName: "Josh",
    lastName: "Doe",
    email: "josh@doe.com",
    password: "JoshDoe3!"
});

const testAccount = new Account({
    id: 3,
    user: testUser,
    admin: false
});

const createAccount = (account: Account): Account => {
    accounts.push(account);
    return account;
};

const getAccountByUser = ({
    user
}: {
    user: User
}): Account | undefined => {
    return accounts.find((account) => account.getUser() === user)
};

const getAllAccounts = (): Account[] => accounts;

export default {
    createAccount,
    getAccountByUser,
    getAllAccounts
}*/