import {ORDERS_LOADED, ORDERS_LOADING_START} from "../actions";

const initialState = {
    orders: {
        loaded: false,
        loading: true,
        data: []
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
            console.log(state.orders.data !== action.orders, 'CHANGED?');
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
                    loaded: false
                }
            };
        default:
            return state
    }
};
