import {USER_SIGN_IN_SUCCESS, USER_SIGN_OUT} from "../actions";
import {reactLocalStorage} from "reactjs-localstorage";
import {API_TOKENS} from "../data/storage";

const initialState = {
    authenticated: false,
    user: {
        username: 'faisal_manzer',
        category: 'shipper',
        dp: 'https://api.adorable.io/avatars/50/faisal_manzer',
        email: 'faisal@aria16.in',
        pro: true
    }
};

export const auth = (state = initialState, action) => {

    switch (action.type) {
        case USER_SIGN_IN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: action.user
            };

        case USER_SIGN_OUT:
            reactLocalStorage.remove(API_TOKENS);
            return {
                ...initialState,
                authenticated: false,
                user: {}
            };
        default:
            return state
    }

};
