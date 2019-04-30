import axios from "axios";
import {
    fetchInitialDatas,
    addPost
} from "../actions/authActions";
// import { ADD_POST } from "../actions/actionsVariables";
// import { REGISTER_USER } from "../actions/actionsVariables";
// import { LOGIN_USER } from "../actions/actionsVariables";
import { FETCH_USER, REGISTER_USER, LOGIN_USER, UPDATE_POST, EDIT_PROFILE } from "../actions/actionsVariables"; 

const usersReducerDefaultReducer = {
    id:"userid1",
    name: "user45",
    email:"email@email.com",
    country: "South Korea",
    socialNetwork: "facebook__link",
    image: "./image/profile__image.jpg",
    books: [
        {
            bookId: "bookid1",
            cover: "./image/book__cover1.jpg",
            file: "fileLocation",
            title: "title1",
            author: "author1",
            reviews: [
                {
                    userReviewId: "userReviewId1",
                    reviewTimestamp: 123456789,
                    review: "this is just a review1"
                }
            ]
        },
        {
            bookId: "bookid2",
            cover: "./image/book__cover2.jpg",
            file: "fileLocation",
            title: "title2",
            author: "author2",
            reviews: [
                {
                    userReviewId: "userReviewId2",
                    reviewTimestamp: 123456789,
                    review: "this is just a review2"
                }
            ]
        }
    ]
};

export default (state = usersReducerDefaultReducer, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return [
                ...state, 
                action.user
            ];
        case LOGIN_USER:
            return true;
        case EDIT_PROFILE:
            return true;
            // return [
            //     ...state, 
            //     action.edits
            // ];
        case FETCH_USER:
            return action.user;
        default:
            return state;
    }
};

// export default usersReducer;