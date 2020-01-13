import { USER_SIGN_IN_SUCCESS, USER_SIGN_OUT } from "../actions";
import { reactLocalStorage } from "reactjs-localstorage";
import { API_TOKENS } from "../data/storage";

const initialState = {
    authenticated: false,
    user: {
        username: '99',
        category: 'supplier',
        dp: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjZk9P1rrfkAhUUinAKHYYxAucQjRx6BAgBEAQ&url=https%3A%2F%2Fstackoverflow.com%2Fq%2F38576264&psig=AOvVaw1D5ZWppv49EdbMMoL-q-I1&ust=1567693334854058',
        email: 'trelos.in',
        pro: true,
        verified: null,
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
