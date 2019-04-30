import {
    addPost
} from "../actions/authActions";
import axios from "axios"; 
import {
    ADD_POST, 
    REMOVE_POSTS,
    UPDATE_POST, 
    FETCH_POSTS
} from "../actions/actionsVariables";
import moment from "moment";


// const postsReducerDefaultState = {
//     title: "",
//     author: "",
//     cover: "",
//     file: ""
// };

const postsReducerDefaultState = [
    {
        user: {
            username: "User1",
            user_profile: "./image/profile__image.jpg",
            location: "country1",
            id: 1
        },
        book: {
            title: "title1",
            author: "author1",
            cover: "./image/book__cover1.jpg",
            postDate: moment().format("D MMM YYYY"),
            postDescription: "this is just a simple test for the books description",
            id: 1
        }
    },
    {
        user: {
            username: "User2",
            user_profile: "./image/profile__image.jpg",
            location: "country2",
            id: 2
        },
        book: {
            title: "title2",
            author: "author2",
            cover: "./image/book__cover2.jpg",
            postDate: moment().format("D MMM YYYY"),
            postDescription: "this is just a simple test for the books description",
            id: 2
        }
    }
];

export default (state = postsReducerDefaultState, action) => {
    switch(action.type) {
        // get all posts
        case FETCH_POSTS:
            return action.posts;
        case ADD_POST:
            return axios.post("https://localhost:8080/post", {
                        
                    })
                    .then((res) => console.log(res))
                    .catch((error) => console.log(error));
        case REMOVE_POSTS:
            return state.filter(({id}) => {
                return id === action.id
            });
        case UPDATE_POST:
            return true;
        default:
            return state;
    }
};

