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
        return axios.get('https://pedros.tech:8080/posts')
                    .then(response => {
                        dispatch(fetchPostsAll(response.data))
                        console.log("fetch______posts: ", ...response.data)
                    })
                    .catch(error => console.log(error));
    };
};

// Action for creating a post
// **************************
export const createPosts = (datas, userId) => ({
    type: CREATE_POST,
    post: {
        cover: datas.cover,
        file: datas.file,
        title: datas.title,
        author: datas.author,
        description: datas.description
    },
    userId
});

export const actionCreatePosts = (dates, userId) => {
    return dispatch => {
        // http://pedros.tech:8080/post
        // return axios.post("https://pedros.tech:9090/file", datas)
            return axios.post("https://pedros.tech:8080/post", dates, userId)
                    .then(response => {
                        dispatch(createPosts(response, response.data.userId));
                        console.log(response)
                    })
                    .catch(error => console.log('post error: ', error));
    };
};

export const filePosts = (file, userId) => ({
    type: "POST_FILE",
    files: {
        cover: file.cover,
        // file: file.file
    },
    userId
});

export const actionFilePosts = (file, userId) => {
    return dispatch => {
        return axios.post("https://pedros.tech:9090/file", file, userId)
                    .then(response => {
                        dispatch(filePosts(response, response.data.userId))
                        console.log("postfile________success: ", response)
                    })
                    .catch(error => console.log("error_____postfile: ", errpr))
    }
}

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