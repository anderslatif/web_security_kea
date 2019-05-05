import {
    REGISTER_USER,
    LOGIN_USER,
    FETCH_USER,
    EDIT_PROFILE,
    CREATE_STATUS,
    PROFILE_IMAGE
} from './actionsVariables';
import axios from 'axios';

const authUrl = `${process.env.Address ? process.env.Address : "pedros.tech"}:8080`;

// register actions
// ****************

export const registerUser = (datas) => ({
    type: REGISTER_USER,
    user: {
        email: datas.email,
        password: datas.password,
        passwordRepeated: datas.passwordRepeated
    }
});

export const actionRegisterUser = ({ email, password, passwordRepeated }) => {
    return (dispatch) => {
        return axios.post(`${authUrl}/signup`, { email, password, passwordRepeated })
            .then(response => {
                console.log(response);
                dispatch(registerUser(response.data));
            })
            .catch(error => {
                throw (error);
            });
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

export const actionLoginUser = ({ email, password }) => {
    return (dispatch) => {
        return axios.post(`${authUrl}/login`, { email, password })
                .then(response => {
                    console.log(response);
                    dispatch(loginUser(response.data));
                })
                .catch(error => {
                    throw (error);
                });
    };
};

// create status
// *************
export const createStatus = (status) => ({
    type: CREATE_STATUS,
    status
});

export const actionCreateStatus = ({ status }) => {
    return (dispatch) => {
        return axios.post(`${process.env.Address ? process.env.Address : "pedros.tech"}:8080/thoughts`, { status })
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
        return axios.post(`${process.env.Address ? process.env.Address : "pedros.tech"}:8080/idontknowtheroute`, { profile })
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
