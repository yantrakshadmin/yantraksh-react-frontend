import {toast} from "react-toastify";

const {info, success, error} = toast;

export const signINAgainNotification = () => info("Please, SignIn Again. \nWe SignOut user after 24hr of login.");
export const userCreateSuccess = user => success(`${user} created successfully.`);
export const userCreateFailed = () => error("Sorry, something went wrong.");
export const errorGettingUserInfoNotification = () => error("Please, SignIn Again. \nWe are having error in getting your info");
export const errorSigningNotification = (notify) => error(`Cannot sign in now. Please check your network. \n${notify}`);
export const welcomeUserNotification = (user) => success(`Welcome, ${user}`);
export const signInRequestNotification = () => info('Please Sign In to console');
export const errorFetchingData = () => error('An unknown error occurred while fetching data.');
export const orderLoadedSuccessfully = () => success('Inventory refreshed.');
export const refreshing = () => info('Refreshing');
export const rfqRaised = () => info('RFQ Raised');


// export const get
