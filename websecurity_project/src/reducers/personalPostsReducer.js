/*eslint-disable*/
import { FETCH_PERSONAL_POSTS } from "../actions/actionsVariables";
import moment from "moment";

const personalPostsDefaultState = [
    // {
    //     id: "book1",
    //     name: "tests",
    //     title: "book title1",
    //     author: "book author1",
    //     rating: "5 stars",
    //     cover: "./image/book__cover1.jpg",
    //     reviews: [
    //         {
    //             userName: "Jim Hopkins1",
    //             userImage: "https://via.placeholder.com/150C/O https://placeholder.com/",
    //             userReview: "Great book!",
    //             reviewDates: moment().format("D. MM. YYYY"),
    //             reviewId: 1
    //         },
    //         {
    //             userName: "Jim Hopkins2",
    //             userImage: "https://via.placeholder.com/150C/O https://placeholder.com/",
    //             userReview: "Great book!",
    //             reviewDates: moment().format("D. MM. YYYY"),
    //             reviewId: 2
    //         }
    //     ]
    // },
    // {
    //     id: "book2",
    //     name:"tests",
    //     title: "book title2",
    //     author: "book author2",
    //     rating: "5 stars",
    //     cover: "./image/book__cover2.jpg",
    //     reviews: [
    //         {
    //             userName: "Jim Hopkins1",
    //             userImage: "https://via.placeholder.com/150C/O https://placeholder.com/",
    //             userReview: "Great book!",
    //             reviewDates: moment().format("D. MM. YYYY"),
    //             reviewId: 1
    //         },
    //         {
    //             userName: "Jim Hopkins2",
    //             userImage: "https://via.placeholder.com/150C/O https://placeholder.com/",
    //             userReview: "Great book!",
    //             reviewDates: moment().format("D. MM. YYYY"),
    //             reviewId: 2
    //         }
    //     ]
    // },
    // {
    //     id: "book3",
    //     name:"tests",
    //     title: "book title1",
    //     author: "book author1",
    //     rating: "5 stars",
    //     cover: "./image/book__cover1.jpg"
    // },
    // {
    //     id: "book4",
    //     name:"tests",
    //     title: "book title2",
    //     author: "book author2",
    //     rating: "5 stars",
    //     cover: "./image/book__cover2.jpg"
    // },
    // {
    //     id: "book5",
    //     name:"tests",
    //     title: "book title1",
    //     author: "book author1",
    //     rating: "5 stars",
    //     cover: "./image/book__cover1.jpg"
    // }
];

export default (state = personalPostsDefaultState, action) => {
    switch(action.type) {
        case FETCH_PERSONAL_POSTS:
            return [...state, action.posts];
        default: 
            return state;
    }
}