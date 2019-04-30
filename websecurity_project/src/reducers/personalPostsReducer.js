import { FETCH_PERSONAL_POSTS } from "../actions/actionsVariables";

const personalPostsDefaultState = [
    {
        name:"tests",
        title: "book title1",
        author: "book author1",
        rating: "5 stars",
        cover: "./image/book__cover1.jpg"
    },
    {
        name:"tests",
        title: "book title2",
        author: "book author2",
        rating: "5 stars",
        cover: "./image/book__cover2.jpg"
    },
    {
        name:"tests",
        title: "book title1",
        author: "book author1",
        rating: "5 stars",
        cover: "./image/book__cover1.jpg"
    },
    {
        name:"tests",
        title: "book title2",
        author: "book author2",
        rating: "5 stars",
        cover: "./image/book__cover2.jpg"
    },
    {
        name:"tests",
        title: "book title1",
        author: "book author1",
        rating: "5 stars",
        cover: "./image/book__cover1.jpg"
    }
];

export default (state = personalPostsDefaultState, action) => {
    switch(action.type) {
        case FETCH_PERSONAL_POSTS:
            return true;
        default: 
            return state;
    }
}