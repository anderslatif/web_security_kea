/*eslint-disable*/
const store = createStore(
    combineReducers({
      posts: postsReducer,
      user: usersReducer,
      personalPosts: personalPostsReducer
    })
);

// personalPosts should contains the posts from the logged in user

personalPosts = [
    {
        author: "book author1",
        cover: "./image/book__cover1.jpg",
        name: "tests",
        title: "book title1",
        file: "file__path"
    },
    {},
    // etc.
];

// *posts* are objects with two keys
// *posts* are the global posts

posts = [
    {
        user: {
            id: 1,
            location: "country1",
            user_profile: "./image/profile__image.jpg",
            username: "User1"
        },
        book: {
            author: "author1",
            cover: "./image/book__cover1.jpg",
            id: 1,
            postDate: "30 Apr 2019",
            postDescription: "this is just a simple test for the books description",
            title: "title1",
            file: "file__path"
        }
    },
    {},
    {}
    // etc.
];

// *user* datas

user = {
    id: "userid1",
    country: "South Korea",
    email: "email@email.com",
    image: "./image/profile__image.jpg",
    name: "user45",
    cover: "image__path",
    socialNetwork: "facebook__link",
    fullName: "userFullName"
}

// is it possible to have a key with the length of posts for the logged user?
/* if not that means that it should be a new key in the *user* that is an 
   array with all the projects specific to the logged user*/ 