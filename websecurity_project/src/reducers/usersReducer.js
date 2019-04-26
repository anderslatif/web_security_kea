import axios from "axios";
import {
    fetchInitialDatas,
    addPost
} from "../actions/authActions";
import { ADD_POST } from "../actions/actionsVariables";

const usersReducerDefaultReducer = {};

const usersReducer = (state = usersReducerDefaultReducer, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return axios.post("http://localhost:8080/signup", {
                email: users.email,
                password: users.password,
                passwordRepeat: users.passwordRepeat
                // title: action.posts.title,
                // author: action.posts.author,
                // cover: action.posts.cover,
                // file: action.posts.file
            })
            .then(res => console.log(res))
            .catch((error) => console.log(error));
        case LOGIN_USER:
            return true;
        default:
            return state;
    }
};

export default usersReducer;