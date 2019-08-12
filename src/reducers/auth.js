import {USER_SIGN_IN_SUCCESS, USER_SIGN_OUT} from "../actions";
import {reactLocalStorage} from "reactjs-localstorage";
import {API_TOKENS} from "../data/storage";

const initialState = {
    authenticated: false,
    user: {
        username: 'faisal_manzer',
        name: 'Faisal manzer'
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
            };
        default:
            return state
    }

};



