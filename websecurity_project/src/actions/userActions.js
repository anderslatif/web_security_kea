import {
    REGISTER_USER,
    LOGIN_USER,
    FETCH_USER,
    EDIT_PROFILE,
    CREATE_STATUS,
    PROFILE_IMAGE
} from './actionsVariables';
import axios from 'axios';

const authUrl = `${process.env.ADDRESS}:8080`;

// register actions
// ****************
// export const actionRegisterNewUser = (data) => {

// }

export const registerUser = (datas) => ({
    type: REGISTER_USER,
    user: {
        email: datas.email,
        password: datas.password,
        passwordRepeated: datas.passwordRepeated
    }
});

export const actionRegisterUser = (datas) => {
    return (dispatch) => {
        return fetch("http://localhost:8080/signup", {  
            method: 'POST',  
            headers: {  
                'Access-Control-Allow-Origin':'*' 
            },  
            body: JSON.stringify({...datas})
        })
        .then(function (datas) {  
          console.log('Request success: ', datas);  
          dispatch(registerUser(datas.body));
          //console.log(response);
        })  
        .catch(function (error) {  
          console.log('Request failure: ', error);  
        });
        // return axios.post(`${authUrl}/signup`, data)
        //     .then(response => {
        //         console.log(response);
        //         dispatch(registerUser(response.data));
        //     })
        //     .catch(error => {
        //         throw (error);
        //     });
    };
};

// login actions
// *************

export const loginUser = (datas) => ({
    type: LOGIN_USER,
    user: {
        email: datas.email,
        password: datas.password
    }
});

export const actionLoginUser = (datas) => {
    return (dispatch) => {
        return fetch("http://localhost:8080/login", {  
            method: 'POST',  
            headers: {  
                'Access-Control-Allow-Origin':'*' 
            },  
            body: JSON.stringify(datas)
        })
        .then(function (datas) {  
          console.log('Request success: ', datas);  
          dispatch(loginUser(datas.body));
          //console.log(response);
        })  
        .catch(function (error) {  
          console.log('Request failure: ', error);  
        });
    };
    //     return axios.post(`${authUrl}/login`, { email, password })
    //             .then(response => {
    //                 console.log(response);
    //                 dispatch(loginUser(response.data));
    //             })
    //             .catch(error => {
    //                 throw (error);
    //             });
    // };
};

// create status
// *************
export const createStatus = (status) => ({
    type: CREATE_STATUS,
    status
});

export const actionCreateStatus = ({ status }) => {
    return (dispatch) => {
        return axios.post(`${process.env.ADDRESS}:8080/thoughts`, { status })
                    .then(response => {
                        console.log(response);
                        dispatch(createStatus(response.data));
                    })
                    .catch(error => {
                        throw (error);
                    });
    };
};

// profile image
// *************
export const createProfileImage = (profile) => ({
    type: PROFILE_IMAGE,
    profile
});

export const actionCreateProfileImage = (profile) => {
    return (dispatch) => {
        return axios.post(`${process.env.ADDRESS}:8080/idontknowtheroute`, { profile })
                    .then(response => {
                        console.log(response);
                        dispatch(createProfileImage(response.data));
                    })
                    .catch(error => {
                        throw (error);
                    });
    };
};

// Initial add or/and Edit profile
// *******************************
// corect but commented uncomment later
// **********************************
// export const editProfile = (id, edits) => ({
//     type: EDIT_PROFILE,
//     id,
//     edits
// });

// export const actionEditProfile = () => {
//     return (dispatch) => {
//         return axios.post(`${authUrl}/idontkmowtheroute`, {email, fullName, socialNetwork, country})
//             .then(response => {
//                 console.log(response)
//                 dispatch(editProfile(response.data))
//             })
//             .catch(error => {
//                 throw(error);
//             });
//     };
// }

// corect but commented uncomment later
// **********************************
// const fetchUser = (user) = ({
//     type: FETCH_USER,
//     user
// });

// export const fetchLoggedUser = () => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get("http://localhost:8080/profile");
//             console.log(response.data);
//             dispatch(fetchUser(response.data));
//         }
//         catch (error) {
//             throw (error);
//         }
//     }
// };

// TO-DO:
// Should return an user Object:
// Example:
// const regularUser = {
//     user: {
//         email,
//         password,
//         activationKey,
//         username,
//         country,
//         socialNetwork
//     },
//     books: [
//         {},{},{},{},{}
//     ]
// };

// const regularPosts = [
//     {
//         _id,
//         title,
//         author,
//         cover,
//         file, //(file__path)
//         postDate,
//         description,
//         bookOwner: "_id123456789",
//     }
// ];
