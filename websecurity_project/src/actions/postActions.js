import {
    ADD_POST,
    REMOVE_POSTS,
    UPDATE_POST,
    FETCH_CHAT,
    FETCH_POSTS
} from "./actionsVariables";
import axios from "axios";

export const addPost = ({id, title, author, cover, file}) => ({
    type: ADD_POST,
    post: {
        id,
        title,
        author,
        cover,
        file
    }
});

export const removePosts = ({id}) => ({
    type: REMOVE_POSTS,
    id
});

export const updatePost = (id, {title, author, cover, file, description}) => ({
    type: UPDATE_POST,
    id,
    title,
    author,
    cover,
    file,
    description
});

export const fetchChat = () => ({
    type: FETCH_CHAT
});

export const fetchPosts = (posts) => ({
    type: FETCH_POSTS,
    posts
});

export const fetchAllPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:8080/posts");
            console.log(response.data);
            dispatch(fetchPosts(response.data));
        }
        catch (error) {
            throw (error);
        }
    }
};
        // return (dispatch) => {
        //     return axios.get("http://localhost:8080/posts")
        //                 .then(response => {
        //                     console.log(response.data)
        //                     dispatch(fetchPosts(response.data))
        //                 })
        //                 .catch(error => {
        //                     throw(error);
        //                 });
        // }
