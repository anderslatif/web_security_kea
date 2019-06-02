/*eslint-disable*/
import {
    REGISTER_USER,
    LOGIN_USER,
    // FETCH_USER,
    // EDIT_PROFILE,
    CREATE_STATUS,
    PROFILE_IMAGE,
    CREATE_PROFILE,
    SIGN_OUT,
    FETCH_PROFILE
} from './actionsVariables';
import axios from 'axios';
import { history } from "./history";
import { userConstants } from './actionsVariables';

// register actions
// ****************

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
        // https://pedros.tech:8080/signup
        return axios.post('http://localhost:8085/signup', datas)
        .then(response => {
            dispatch(registerUser(response, response.data));
            console.log(response.data)
        })
        .catch(error => console.log('register error: ', error));
    };
};

// fetch profile
// ***************

export const fetchProfileDatas = (userId, datas) => ({
    type: FETCH_PROFILE,
    userId, 
    user: {
        email: datas.email,
        country: datas.country,
        socialNetwork: datas.socialNetwork

    }
})

export const actionFetchProfileDatas = (userId) => {
    return dispatch => {
        return axios.post("http://localhost:8085/profile", {userId: userId})
                    .then(response => {
                        dispatch(fetchProfileDatas(response.data, response.data))
                        console.log("fetch_____profile: ", response.data)
                    })
                    .catch(error => console.log("fetch__profile: ", error))
    }
}


// login actions
// *************

export const loginUser = (datas, isLoggedIn, userId) => ({
    type: LOGIN_USER,
    user: {
        email: datas.email,
        password: datas.password
    },
    isLoggedIn,
    userId
});

export const actionLoginUser = (datas, isLoggedIn, userId) => {
    return dispatch => {
        // http://pedros.tech:8080/login
        return axios.post('http://localhost:8085/login', datas, isLoggedIn, userId)
                    .then(response => {
                        dispatch(loginUser(response, response.data.result, response.data.userId))
                        // const userId = JSON.parse(localStorage.getItem('userId'))
                        localStorage.removeItem('userId');
                        localStorage.setItem("userId", JSON.stringify(response.data.userId));
                        // sessionStorage.setItem("userId", response.data.sessionId);
                        // history.push('/profile', { userSession: response.data });
                        console.log("response_____login: ", response)
                    })
                    .catch(error => console.log('login error: ', error));
    };
};

// signout users
// *************

export const signOut = () => ({
    type: SIGN_OUT
});

export const actionSignOut = () => {
    return dispatch => {
        return axios.get('http://localhost:8085/logout')
                    .then(response => {
                        dispatch(signOut())
                        console.log("signup__success", response)
                    })
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
        // `${process.env.Address ? process.env.Address : 'pedros.tech'}:8080/thoughts`
        return axios.post("http://localhost:8085/thoughts", status)
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
        return axios.put('http://localhost:8085/profile', profile)
                    .then(response => {
                        dispatch(createProfileImage(response.data));
                    })
                    .catch(error => {
                        throw (error);
                    });
    };
};

// create profile
// ***************

export const createProfileDatas = (profile, userId) => ({
    type: CREATE_PROFILE,
    profile: {
        email: profile.email,
        country: profile.country,
        socialNetwork: profile.socialNetwork               
    },
    userId
});

export const actionCreateProfileDatas = (profile, userId) => {
    return (dispatch) => {
        return axios.put('http://localhost:8085/profile', {
            profile, userId
        })
                    .then(response => {
                        dispatch(createProfileDatas(response, response.data.userId))
                        console.log(response)
                    })
                    .catch(error => console.log(error));
    };
};

export const updateProfileDatas = (profile, userId) => ({
    type: "UPDATE_PROFILE",
    profile: {
        email: profile.email,
        country: profile.country,
        socialNetwork: profile.socialNetwork               
    },
    userId
});

export const actionUpdateProfileDatas = (profile, userId) => {
    return (dispatch) => {
        return axios.put('http://localhost:8085/profile', {
            profile, userId
        })
                    .then(response => {
                        dispatch(updateProfileDatas(response, response.data.userId))
                        console.log(response)
                    })
                    .catch(error => console.log(error));
    };
};