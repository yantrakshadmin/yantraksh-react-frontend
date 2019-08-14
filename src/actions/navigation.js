import {CONNECTION_STATUS_CHANGED, SET_REDIRECT_TO} from "./index";

export const setRedirectTo = (url) => ({
    type: SET_REDIRECT_TO,
    redirectTo: url
});


export const connectionStatusChanged = () => {
    return  {
        type: CONNECTION_STATUS_CHANGED
    }
};
