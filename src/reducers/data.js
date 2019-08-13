import {ORDERS_LOADED, ORDERS_LOADING_START} from "../actions";

const initialState = {
    orders: {
        loaded: false,
        loading: true,
        data: []
    },
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
                    loading: true
                }
            };
        default:
            return state
    }

};
