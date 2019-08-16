import {getShipperAllOrderDetails, markHoldItemsApi, markItemsForDispatchApi} from "../helpers/api";
import {ORDERS_CHANGING, ORDERS_LOADED} from "./index";
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


export const markOrdersOnHold = (selected, redirect) => (async (dispatch, getState) => {
    const orders = getState().data.orders.data;
    let data = orders.slice();

    dispatch({type: ORDERS_CHANGING});
    await markHoldItemsApi(selected);

    orders.map((item, index) => {
        if (selected.includes(item.id)) {
            data[index].rtd = false;
            data[index].is_dispatched = false;
        }

        return null;
    });

    dispatch({type: ORDERS_LOADED, orders: data});
    redirect('/orders/on-hold');
});

export const markOrdersRTD = (selected, redirect) => (async (dispatch, getState) => {
    const orders = getState().data.orders.data;
    let data = orders.slice();

    dispatch({type: ORDERS_CHANGING});
    await markItemsForDispatchApi(selected);

    orders.map((item, index) => {
        if (selected.includes(item.id)) {
            data[index].rtd = true;
            data[index].is_dispatched = false;
        }

        return null;
    });

    dispatch({type: ORDERS_LOADED, orders: data});
    redirect('/orders/ready-to-dispatch')
});

export const planVehiclesForOrders = (selected) => (async (dispatch, getState) => {
    const orders = getState().data.orders.data;
    let data = orders.slice();

    orders.map((item, index) => {
        if (selected.includes(item.id)) {
            data[index].rtd = true;
            data[index].is_dispatched = true;
        }

        return null;
    });

    dispatch({type: ORDERS_LOADED, orders: data});
});
