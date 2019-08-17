import {ORDERS_LOADED, ORDERS_CHANGING, ORDERS_LOADING_START, USER_SIGN_OUT} from "../actions";

const initialState = {
    orders: {
        loaded: false,
        loading: true,
        data: [],
        changing: true
    },
    freight: {
        loading: true,
        loaded: false,
        data: []
    }
};

export const data = (state = initialState, action) => {

    switch (action.type) {
        case ORDERS_LOADED:
            return {
                ...state,
                orders: {
                    loaded: true,
                    loading: false,
                    data: action.orders
                }
            };
        case ORDERS_LOADING_START:
            return {
                ...state,
                orders: {
                    ...state.orders,
                    loading: true,
                    loaded: false,
                    changing: true
                }
            };
        case ORDERS_CHANGING:
            return {
                ...state,
                orders: {
                    ...state.orders,
                    changing: true
                }
            };
        case USER_SIGN_OUT:
            return initialState;
        default:
            return state
    }
};
