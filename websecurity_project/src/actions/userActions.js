import {
    REGISTER_USER,
    LOGIN_USER
} from "./actionsVariables";

export const registerUser = ({email, password, passwordrepeat}) => ({
    type: REGISTER_USER,
    users: {
        email,
        password,
        passwordrepeat
    }
});

export const loginUser = (email, password) => ({
    type: LOGIN_USER,
    email,
    password
});

// TO-DO:
// Should return an user Object:
// Example:
const regularUser = {
    user: {
        email,
        password,
        activationKey,
        username,
        country,
        socialNetwork
    },
    books: [
        {},{},{},{},{}
    ]
};

const regularPosts = [
    {
        _id,
        title,
        author,
        cover,
        file, //(file__path)
        postDate,
        description,
        bookOwner: "_id123456789",
    }
];