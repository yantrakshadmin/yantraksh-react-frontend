import {toast} from "react-toastify";

const {info, success, error} = toast;

export const signINAgainNotification = () => info("Please, SignIn Again. \nWe SignOut user after 24hr of login");
export const errorGettingUserInfoNotification = () => error("Please, SignIn Again. \nWe are having error in getting your info");
export const errorSigningNotification = (notify) => error(`There is some problem in signing. \n${notify}`);
export const welcomeUserNotification = (user) => success(`Welcome, ${user}`);
export const signInRequestNotification = () => info('Please Sign In to console');
export const errorFetchingData = () => error('An unknown error occurred while fetching data.');
export const orderLoadedSuccessfully = () => success('Orders refreshed.');
export const refreshing = () => info('Refreshing');
