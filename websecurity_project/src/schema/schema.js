//schema
import { createStore, combineReducers } from "redux";

export default () => {
    const store = createStore(combineReducers({
        user: {},
        book: {},
        auth: {}
    }))
    return store;
};

const posts = {}

const messages = {}

const book = {
    _id: String,
    bookTitle: String,
    bookCover: String,
    bookAuthor: String
}

const user = {
    _id: String,
    userName: String,
    userEmail: String,
    userPassword: String,
    userPosts: [
        "_id123456789", //book's id
        "_id123456789" // book's id
    ]
}