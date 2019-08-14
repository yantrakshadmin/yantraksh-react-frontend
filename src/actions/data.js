import {getShipperAllOrderDetails} from "../helpers/api";
import {ORDERS_LOADED} from "./index";
import {errorFetchingData, orderLoadedSuccessfully} from "../helpers/notifications";

export const loadOrders = () => (async (dispatch, getState) => {
    try{
        console.log('LOADING ORDERS');
        const orders = await getShipperAllOrderDetails();
        console.log(orders);
        dispatch({type: ORDERS_LOADED, orders: orders});
        orderLoadedSuccessfully()
    } catch (e) {
        errorFetchingData();
    }
});


