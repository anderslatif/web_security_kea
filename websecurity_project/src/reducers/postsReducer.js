// import {
//     addPost
// } from "../actions/authActions";
// import axios from "axios";
import {
    // ADD_POST,
    // REMOVE_POSTS,
    UPDATE_POST,
    FETCH_POSTS,
    CREATE_POST,
    CREATE_REVIEW,
    // FETCH_PERSONAL_POSTS,
    FETCH_POSTS_ALL
} from "../actions/actionsVariables";
// import moment from "moment";


// const postsReducerDefaultState = {
//     title: "",
//     author: "",
//     cover: "",
//     file: ""
// };

const postsReducerDefaultState = [
    // {
    //     user: {
    //         username: "User1",
    //         user_profile: "./image/profile__image.jpg",
    //         location: "country1",
    //         id: 1
    //     },
    //     book: {
    //         title: "title1",
    //         author: "author1",
    //         cover: "./image/book__cover1.jpg",
    //         postDate: moment().format("D MMM YYYY"),
    //         postDescription: "this is just a simple test for the books description",
    //         id: 1
    //     }
    // },
    // {
    //     user: {
    //         username: "User2",
    //         user_profile: "./image/profile__image.jpg",
    //         location: "country2",
    //         id: 2
    //     },
    //     book: {
    //         title: "title2",
    //         author: "author2",
    //         cover: "./image/book__cover2.jpg",
    //         postDate: moment().format("D MMM YYYY"),
    //         postDescription: "this is just a simple test for the books description",
    //         id: 2
    //     }
    // }
];

export default (state = postsReducerDefaultState, action) => {
    switch(action.type) {
        // create posts
        case CREATE_POST:
            return [...state, action.post]
        // get all posts
        case FETCH_POSTS:
            return action.posts;
        case UPDATE_POST:
            return true;
        case CREATE_REVIEW:
            return [...state, action.review]
        case FETCH_POSTS_ALL:
                return [...state, ...action.posts]
        // case FETCH_PERSONAL_POSTS:
        //     return [...state, action.posts]
        default:
            return state;
        }
    };