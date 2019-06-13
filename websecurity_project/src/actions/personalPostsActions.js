/*eslint-disable*/
import { FETCH_PERSONAL_POSTS } from "./actionsVariables";
import axios from "axios";

export const fetchPersonalPosts = (userId, posts) => ({
    type: FETCH_PERSONAL_POSTS,
    userId,
    posts: [],
});

export const actionFetchPersonalPosts = (userId) => {
    return (dispatch) => {
        return axios.get('https://pedros.tech:8080/posts/', {userid: userId})
                    .then(response => {
                        dispatch(fetchPersonalPosts(response.data, response.data))
                        console.log("fetch______personalposts: ", response.data)
                    })
                    .catch(error => console.log(error));
    };
};