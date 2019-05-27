import {
    REGISTER_USER,
    LOGIN_USER,
    FETCH_USER,
    EDIT_PROFILE,
    CREATE_STATUS,
    PROFILE_IMAGE,
    CREATE_PROFILE,
    SIGN_OUT,
    FETCH_PROFILE
} from './actionsVariables';
import axios from 'axios';

// register actions
// ****************
// export const actionRegisterNewUser = (data) => {

// }

export const registerUser = (datas, isRegistered) => ({
    type: REGISTER_USER,
    user: {
        email: datas.email,
        password: datas.password,
        passwordRepeated: datas.passwordRepeated
    },
    isRegistered
});

export const actionRegisterUser = (datas) => {
    return dispatch => {
<<<<<<< HEAD
        // https://pedros.tech:8080/signup
        return axios.post('http://localhost:8080/signup', datas)
=======
        return axios.post('https://pedros.tech:8080/signup', datas)
>>>>>>> 078e0cafe45c48a7fe6a3b6fab82451ed7075306
        .then(response => {
            dispatch(registerUser(response, response.data));
        })
        .catch(error => console.log('register error: ', error));
    };
<<<<<<< HEAD
=======

    // return (dispatch) => {
    //     return fetch("https://pedros.tech:8080/signup", {
    //         method: 'POST',
    //         headers: {
    //             'Access-Control-Allow-Origin':'*'
    //         },
    //         body: JSON.stringify({...datas})
    //     })
    //     .then(function (datas) {
    //       console.log('Request success: ', datas);
    //       dispatch(registerUser(datas.body));
    //       //console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log('Request failure: ', error);
    //     });
        // return axios.post(`${authUrl}/signup`, data)
        //     .then(response => {
        //         console.log(response);
        //         dispatch(registerUser(response.data));
        //     })
        //     .catch(error => {
        //         throw (error);
        //     });
    // };
>>>>>>> 078e0cafe45c48a7fe6a3b6fab82451ed7075306
};

// fetch profile
// ***************

export const fetchProfileDatas = (profile) => ({
    type: FETCH_PROFILE,
    profile: {
        email: profile.email,
        country: profile.country,
        socialNetwork: profile.socialNetwork
    }
})

export const actionFetchProfileDatas = (profile) => {
    return dispatch => {
        return axios.get("http://localhost:8080/profile", profile)
                    .then(response => {
                        dispatch(fetchProfileDatas(response))
                        console.log(response)
                    })
                    .catch(error => console.log("fetch__profile: ", error))
    }
}


// login actions
// *************

export const loginUser = (datas, isLoggedIn) => ({
    type: LOGIN_USER,
    user: {
        email: datas.email,
        password: datas.password
    },
    isLoggedIn
});

export const actionLoginUser = (datas) => {
    return dispatch => {
<<<<<<< HEAD
        // http://pedros.tech:8080/login
        return axios.post('http://localhost:8080/login', datas)
        .then(response => {
            dispatch(loginUser(response, response.data))
            console.log(response)
        })
        .catch(error => console.log('login error: ', error));
    };
=======
        return axios.post('https://pedros.tech:8080/login', datas)
        .then(response => {
            dispatch(loginUser(response, response.data.result));
            // console.log(response.data.result)
        })
        .catch(error => console.log('login error: ', error));
    };
    // return (dispatch) => {
    //     return fetch("https://pedros.tech:8080/login", {
    //         method: 'POST',
    //         headers: {
    //             'Access-Control-Allow-Origin':'*'
    //         },
    //         body: JSON.stringify(datas)
    //     })
    //     .then(function (datas) {
    //       console.log('Request success: ', datas);
    //       dispatch(loginUser(datas.body));
    //       //console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log('Request failure: ', error);
    //     });
    // };
    //     return axios.post(`${authUrl}/login`, { email, password })
    //             .then(response => {
    //                 console.log(response);
    //                 dispatch(loginUser(response.data));
    //             })
    //             .catch(error => {
    //                 throw (error);
    //             });
    // };
>>>>>>> 078e0cafe45c48a7fe6a3b6fab82451ed7075306
};

// signout users
// *************

export const signOut = () => ({
    type: SIGN_OUT
});

export const actionSignOut = () => {
    return dispatch => {
        return axios.get('http://localhost:8080/logout')
                    .then(response => console.log("signup__success", response))
                    .catch(error => console.log("signout__error", error))
    }
}

// create status
// *************
export const createStatus = (status) => ({
    type: CREATE_STATUS,
    status
});

export const actionCreateStatus = (status) => {
    return (dispatch) => {
<<<<<<< HEAD
        // `${process.env.Address ? process.env.Address : 'pedros.tech'}:8080/thoughts`
        return axios.post("http://localhost:8080/thoughts", status)
=======
        return axios.post('https://pedros.tech:8080/thoughts', { status })
>>>>>>> 078e0cafe45c48a7fe6a3b6fab82451ed7075306
                    .then(response => {
                        dispatch(createStatus(response));
                        console.log(response);
                    })
                    .catch(error => {
                        console.log("thoughts__error: ", error);
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
        return axios.put('https://pedros.tech:8080/profile', { profile })
                    .then(response => {
                        // console.log(response);
                        dispatch(createProfileImage(response.data));
                    })
                    .catch(error => {
                        throw (error);
                    });
    };
};

// create profile
// ***************

export const createProfileDatas = (profile) => ({
    type: CREATE_PROFILE,
    profile: {
        email: profile.email,
        country: profile.country,
        socialNetwork: profile.socialNetwork               
    }
    // profile
});

export const actionCreateProfileDatas = (profile) => {
    return (dispatch) => {
        return axios.post('http://localhost:8080/profile', profile)
                    .then(response => {
<<<<<<< HEAD
                        dispatch(createProfileDatas(response))
                        console.log(response)
=======
                        // console.log(response)
                        dispatch(createProfileDatas(response.data));
>>>>>>> 078e0cafe45c48a7fe6a3b6fab82451ed7075306
                    })
                    .catch(error => console.log(error));
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
//             const response = await axios.get("https://pedros.tech:8080/profile");
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
