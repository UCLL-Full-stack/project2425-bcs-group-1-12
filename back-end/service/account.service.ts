/*import { Account } from "../model/account";
import { User } from "../model/user";
import accountDb from "../repository/account.db";
import userDb from "../repository/user.db";
import { AccountInput } from "../types";


//When creating an account, see if the user already exists
//if it does not, create new user and create account with new user.
const createAccount = ({
    id,
    user: userInput,
    admin,
}: AccountInput): Account => {
    let user = userDb.getUserByFirstNameLastName({
        firstName: userInput.firstName,
        lastName: userInput.lastName
    });

    if (!user) {
        user = new User(userInput)
        userDb.createUser(user)
        if (!userDb.getUserByFirstNameLastName({
            firstName: user.getFirstName(),
            lastName: user.getLastName()
        }))
            throw new Error('User could not be found');
    }

    const account = new Account({ id, user, admin })
    accountDb.createAccount(account)
    return account;
}

export default { createAccount }*/