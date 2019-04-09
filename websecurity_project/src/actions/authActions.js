import {
    FETCH_POSTS, 
    ADD_POST, 
    REMOVE_POSTS ,
    UPDATE_POST,
    FETCH_CHAT
} from "./actionsVariables";

export const fetchInitialDatas = (initialDatas) => ({
    type: FETCH_POSTS,
    initialDatas
});

export const addPost = ({id, title, author, file, cover}) => ({
    type: ADD_POST,
    posts: {
        id, 
        title,
        author,
        file,
        cover
    }
});

export const removePost = ({id}) => ({
    type: REMOVE_POSTS,
    id
}); 

export const updatePost = (id, {title, author, cover, file}) => ({
    type: UPDATE_POST,
    id,
    title,
    author,
    cover,
    file
});

export const fetchChat = (chatMessages) => ({
    type: FETCH_CHAT,
    chatMessages
});

// import axios from "axios";

// const POST_LOGIN = "POST_LOGIN";

// export const loginAuthAction = (datas) => ({
//     type: POST_LOGIN,
//     datas
// });

// export const loginAuthAction = (datas) => {
//     return dispatch => {
//         return axios.post("/api/signup", datas)
//                     .then(res => console.log(res));
//     }
// }

