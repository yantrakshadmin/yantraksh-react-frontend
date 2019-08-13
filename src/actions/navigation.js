import {SET_REDIRECT_TO} from "./index";

export const setRedirectTo = (url) => ({
    type: SET_REDIRECT_TO,
    redirectTo: url
});
