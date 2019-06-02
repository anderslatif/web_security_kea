/*eslint-disable*/
import {
    // ADD_POST,
    REMOVE_POSTS,
    UPDATE_POST,
    FETCH_CHAT,
    FETCH_POSTS,
    CREATE_POST,
    CREATE_REVIEW,
    // FETCH_PERSONAL_POSTS,
    CREATE_POST_FILE,
    FETCH_POSTS_ALL
} from './actionsVariables';
import axios from 'axios';


export const removePosts = ({ id }) => ({
    type: REMOVE_POSTS,
    id
});

export const updatePost = (id, { title, author, cover, file, description }) => ({
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

// fetch all the global posts

export const fetchPostsAll = (posts) => ({
    type: FETCH_POSTS_ALL,
    // userId,
    posts
});

export const actionfetchPostsAll = (userId) => {
    return (dispatch) => {
        return axios.get('http://localhost:8085/posts')
                    .then(response => {
                        dispatch(fetchPostsAll(response.data))
                        console.log("fetch______posts: ", ...response.data)
                    })
                    .catch(error => console.log(error));
    };
};

// Action for creating a post
// **************************
export const createPosts = (datas) => ({
    type: CREATE_POST,
    post: {
        // cover: datas.cover,
        file: datas.file,
        title: datas.title,
        author: datas.author,
        description: datas.description
    }
});

export const actionCreatePosts = (datas) => {
    return dispatch => {
        // http://pedros.tech:8080/post
        return axios.post("http://localhost:9090/file", datas)
                    .then(response => {
                        dispatch(createPosts(response));
                        console.log(response)
                    })
                    .catch(error => console.log('post error: ', error));
    };
};

// Action for creating a review
// **************************
export const createReview = (review) => ({
    type: CREATE_REVIEW,
    review
});

export const actionCreateReview = ({ review, userId, bookId }) => {
    return (dispatch) => {
        return axios.post('https://pedros.tech:8080/review', {
            review,
            userId,
            bookId
        })
        .then(response => {
            dispatch(createReview(response.data));
        })
        .catch(error => {
            throw (error);
        });
    };
};