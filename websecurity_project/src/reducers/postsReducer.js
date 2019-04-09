import {
    addPost
} from "../actions/authActions";
import axios from "axios"; 
import {
    ADD_POST, 
    REMOVE_POSTS,
    UPDATE_POST
} from "../actions/actionsVariables";

const postsReducerDefaultState = {
    title: "",
    author: "",
    cover: "",
    file: ""
};

const postsReducer = (state = postsReducerDefaultState, action) => {
    switch(action.type) {
        // get all posts
        case FETCH_POSTS:
            return axios.get("http://localhost:27017/initial-datas")
                    .then(res => console.log(res))
                    .catch((error) => console.log(error));
        case ADD_POST:
            return axios.post("http://localhost:27017/add-post", {

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