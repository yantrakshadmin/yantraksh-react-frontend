import {getAPITokens, getUserDetails} from "../helpers/api";
import {HIDE_LOADER, USER_SIGN_IN_SUCCESS, USER_SIGN_OUT} from "./index";

import {reactLocalStorage} from 'reactjs-localstorage';
import {API_TOKENS} from "../data/storage";
import {
    errorSigningNotification,
    welcomeUserNotification,
    signINAgainNotification
} from "../helpers/notifications";


export const getUser = () => (async (dispatch) => {
    const user = await getUserDetails();
    dispatch({
        type: USER_SIGN_IN_SUCCESS,
        user: user
    })
});

export const signIn = (username, password) => (async (dispatch, getState) => {

    try {
        const data = await getAPITokens(username, password);
        reactLocalStorage.setObject(API_TOKENS, {
            tokens: data.tokens,
            expires: data.tokens.expires
        });
        await getUser()(dispatch, getState);
        welcomeUserNotification(getState().auth.user.name);
    } catch (e) {
        console.log(e);
        try {
            errorSigningNotification(e.data.detail);
        } catch (e) {
            console.log(e);
            errorSigningNotification("Some unknown error occurred. Please Check your network connection.")
        }
    }
});


export const checkUser = () => (async (dispatch, getState) => {

    if (reactLocalStorage.get(API_TOKENS))
        getUser()(dispatch, getState)
            .then(() => {
                dispatch({type: HIDE_LOADER});
            })
            .catch(() => {
                dispatch({type: USER_SIGN_OUT});
                dispatch({type: HIDE_LOADER});
                signINAgainNotification();
            });
    else{
        dispatch({type: HIDE_LOADER});
        // signInRequestNotification();
    }
});
