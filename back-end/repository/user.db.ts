import { User } from '../model/user'

const users = [
    new User({
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        password: "JohnDoe1!",
    }),
    new User({
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@doe.com",
        password: "JaneDoe2!",
    })
]

const createUser = (user: User): User => {
    users.push(user);
    return user
}

const getUserByFirstNameLastName = ({
    firstName, lastName }: {
        firstName: string; lastName: string
    }): User | null => {
    return users.find(
        (user) => (user.getFirstName() === firstName)
            && (user.getLastName() === lastName)) || null;
}

export default {
    getUserByFirstNameLastName,
    createUser
}