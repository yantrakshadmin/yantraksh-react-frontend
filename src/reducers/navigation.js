import {USER_SIGN_IN_SUCCESS, USER_SIGN_OUT} from "../actions";
import {getNavigations, getRoutes} from "../data/routes";

const initialState = {
    routes: [],
    navs: [],
    // routes: getRoutes('supplier'),
    // navs: getNavigations('supplier'),
    loading: true
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
                ...initialState
            };
        default:
            return state
    }

};
