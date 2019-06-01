/*eslint-disable*/
// *****************
// User constants
// ******************

//Variable for: registering users
export const REGISTER_USER = "REGISTER_USER";

//Variable for: logging in users
export const LOGIN_USER = "LOGIN_USER";

// Variable for: fetching user datas
export const FETCH_USER = "FETCH_USER";

// Variable for: initial add and/or edit profile
export const EDIT_PROFILE = "EDIT_PROFILE";

// Variable for: creating a user status
export const CREATE_STATUS = "CREATE_STATUS";

// Variable for: creating profile image
export const PROFILE_IMAGE = "PROFILE_IMAGE";

// Variable for: creating a profile
export const CREATE_PROFILE = "CREATE_PROFILE";

// Variable for: signing out users
export const SIGN_OUT = "SIGN_OUT";

// Variable for: fetchin the users
export const FETCH_PROFILE = "FETCH_PROFILE";

// *****************
// Posts constants
// ******************

//get all logged in user/posts data on access
export const FETCH_POSTS = "FETCH_POSTS";

//Variable for: creating a new post
export const ADD_POST = "ADD_POST";

//Variable for: creating book files
export const CREATE_POST_FILE = "CREATE_POST_FILE";

//Variable for: removing a post
export  const REMOVE_POSTS = "REMOVE_POST";

//Variable for: updating a post
export const UPDATE_POST = "UPDATE_POST";

//Variable for: getting all chat messages
export const FETCH_CHAT = "FETCH_CHAT";

// Variable for: creting a post
export const CREATE_POST = "CREATE_POST";

// Variable for: creating a review
export const CREATE_REVIEW = "CREATE_REVIEW";

// ****************
// Personal posts actions variables exports
// ****************

export const FETCH_PERSONAL_POSTS = "FETCH_PERSONAL_POSTS";

export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    
    LOGOUT: 'USERS_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'    
};
