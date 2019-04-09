import {
    ADD_POST,
    REMOVE_POSTS,
    UPDATE_POST,
    FETCH_CHAT,
    FETCH_POSTS
} from "./actionsVariables";

export const addPost = ({id, title, author, cover, file}) => ({
    type: ADD_POST,
    posts: {
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

export const fetchPosts = () => ({
    type: FETCH_POSTS
});
