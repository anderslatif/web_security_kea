import {
    ADD_POST,
    REMOVE_POSTS,
    UPDATE_POST,
    FETCH_CHAT,
    FETCH_POSTS,
    CREATE_POST
} from "./actionsVariables";
import axios from "axios";


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

// Action for fetching the all the posts (global ones from the feed)
// *****************************************************************
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

export const actionCreatePosts = ({cover, file, title, author, description}) => {
    return (dispatch) => {
        // return axios({
        //     method:'post',
        //     url:'http://localhost:9090/book',
        //     headers: {
        //         mode: 'no-cors'
        //     },
        //     data: {
        //         cover, file, title, author, description  
        //     }
        // })
        return axios.post("http://localhost:9090/book", {cover, file, title, author, description})
          .then(response => {
            dispatch(actionCreatePosts(response.data))
          })
          .catch(error => {
            throw(error);
          });
      };
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