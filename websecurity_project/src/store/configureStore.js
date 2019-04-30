import {createStore, combineReducers, applyMiddleware} from "redux";
import postsReducer from "../reducers/postsReducer";
import usersReducer from "../reducers/usersReducer";
import personalPostsReducer from "../reducers/personalPostsReducer";
import thunk from 'redux-thunk';
// import expensesReducer from "../reducers/expenses";
// import filtersReducer from "../reducers/filters";
// Store creation

export default () => {
    const store = createStore(
        combineReducers({
          posts: postsReducer,
          user: usersReducer,
          personalPosts: personalPostsReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};


// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState
//     ,
//     compose(
//         applyMiddleware(...middleware),
//         //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// export default store;
