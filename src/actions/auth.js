import {getAPITokens, getUserDetails} from "../helpers/api";
import {USER_SIGN_IN_SUCCESS, USER_SIGN_OUT} from "./index";

import {reactLocalStorage} from 'reactjs-localstorage';
import {API_TOKENS} from "../data/storage";
import {errorSigningNotification, welcomeUserNotification, signInRequestNotification} from "../helpers/notifications";


export const getUser = () => (async (dispatch, getState) => {
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
        try {
            errorSigningNotification(e.data.detail);
        } catch (e) {
            errorSigningNotification("Some unknown error occurred. Please Check your network connection.")
        }
    }
});


export const checkUser = () => (async (dispatch, getState) => {

    if (reactLocalStorage.get(API_TOKENS))
        getUser()(dispatch, getState)
            .catch(() => {
                dispatch({type: USER_SIGN_OUT});
                alert("Please sign-in again");
            });
    else
        signInRequestNotification();
});
