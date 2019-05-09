import {
    ADD_POST,
    REMOVE_POSTS,
    UPDATE_POST,
    FETCH_CHAT,
    FETCH_POSTS,
    CREATE_POST,
    CREATE_REVIEW
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

// Action for fetching the all the posts (global ones from the feed)
// *****************************************************************
export const fetchPosts = (posts) => ({
    type: FETCH_POSTS,
    posts
});

export const fetchAllPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.Address ? process.env.Address : "pedros.tech"}:8080/posts`);
            // console.log(response.data);
            dispatch(fetchPosts(response.data));
        } catch (error) {
            throw (error);
        }
    };
};


// Action for creating a post
// **************************
export const createPosts = (datas) => ({
    type: CREATE_POST,
    post: {
        cover: datas.cover,
        file: datas.file,
        title: datas.title,
        author: datas.author,
        description: datas.description
    }
});

export const actionCreatePosts = (postDatas) => {
    return dispatch => {
        return axios.post("http://pedros.tech:8080/post", postDatas.file)
                    .then(response => {
                        dispatch(createPosts(response.data))
                        // console.log(response)
                    })
                    .catch(error => console.log("post error: ", error))
    }
}

// export const actionCreatePosts = ({ cover, file, title, author, description }) => {
//     return (dispatch) => {
//         return axios.post(`${process.env.Address ? process.env.Address : "pedros.tech"}:9090/book`, { cover, file, title, author, description })
//           .then(response => {
//             dispatch(actionCreatePosts(response.data));
//           })
//           .catch(error => {
//             throw (error);
//           });
//       };
// };


// Action for creating a review
// **************************
export const createReview = (review) => ({
    type: CREATE_REVIEW,
    review
});

export const actionCreateReview = ({ review, userId, bookId }) => {
    return (dispatch) => {
        return axios.post(`${process.env.Address ? process.env.Address : "pedros.tech"}:8080/idontknowtheroute`, {
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
// return (dispatch) => {
    //     return axios.get("http://pedros.tech:8080/posts")
    //                 .then(response => {
        //                     console.log(response.data)
        //                     dispatch(fetchPosts(response.data))
        //                 })
        //                 .catch(error => {
            //                     throw(error);
            //                 });
            // }

// export const addPost = ({id, title, author, cover, file}) => ({
//     type: ADD_POST,
//     post: {
//         id,
//         title,
//         author,
//         cover,
//         file
//     }
// });
