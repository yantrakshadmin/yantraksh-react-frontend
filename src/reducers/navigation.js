import {
    CONNECTION_STATUS_CHANGED,
    HIDE_LOADER,
    SET_REDIRECT_TO,
    SHOW_LOADER,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_OUT
} from "../actions";
import {getNavigations, getRoutes} from "../data/routes";

const initialState = {
    // routes: [],
    // navs: [],
    routes: getRoutes('shipper'),
    navs: getNavigations('shipper'),
    loading: false,
    redirectTo: '/#/dashboard/dashboard',
    online: navigator.onLine
};


export const navigation = (state = initialState, action) => {

    switch (action.type) {

        case USER_SIGN_IN_SUCCESS:
            return {
                ...state,
                routes: getRoutes(action.user.category),
                navs: getNavigations(action.user.category)
            };
        case USER_SIGN_OUT:
            return {
                ...initialState,
                loading: false
            };
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case SET_REDIRECT_TO:
            return {
                ...state,
                redirectTo: action.redirectTo
            };
        case CONNECTION_STATUS_CHANGED:
            return {
                ...state,
                online: navigator.onLine
            };
        default:
            return state
    }
};
