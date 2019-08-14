import {getShipperAllOrderDetails} from "../helpers/api";
import {ORDERS_LOADED} from "./index";
import {errorFetchingData, orderLoadedSuccessfully} from "../helpers/notifications";

export const loadOrders = () => (async (dispatch, getState) => {
    try {
        const orders = await getShipperAllOrderDetails();
        dispatch({type: ORDERS_LOADED, orders: orders});
        orderLoadedSuccessfully()
    } catch (e) {
        errorFetchingData();
    }
});


export const markOrdersOnHold = (selected) => (async (dispatch, getState) => {
    const orders = getState().data.orders.data;
    let data = orders.slice();

    orders.map((item, index) => {
        if (selected.includes(item.id)) {
            data[index].rtd = false;
            data[index].is_dispatched = false;
        }
    });

    dispatch({type: ORDERS_LOADED, orders: data});
});

export const markOrdersRTD = (selected) => (async (dispatch, getState) => {
    const orders = getState().data.orders.data;
    let data = orders.slice();

    orders.map((item, index) => {
        if (selected.includes(item.id)) {
            data[index].rtd = true;
            data[index].is_dispatched = false;
        }
    });

    dispatch({type: ORDERS_LOADED, orders: data});
});

export const planVehiclesForOrders = (selected) => (async (dispatch, getState) => {
    const orders = getState().data.orders.data;
    let data = orders.slice();

    orders.map((item, index) => {
        if (selected.includes(item.id)) {
            data[index].rtd = true;
            data[index].is_dispatched = true;
        }
    });

    dispatch({type: ORDERS_LOADED, orders: data});
});


