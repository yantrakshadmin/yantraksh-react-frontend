import React, {useState, useEffect} from 'react';
import OrderTable from "../../../components/orderTable";
import {getShipperAllOrderDetails} from "../../../helpers/api";
import {errorFetchingData} from "../../../helpers/notifications";


export default () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getShipperAllOrderDetails()
            .then(data => setOrders(data))
            .catch(() => errorFetchingData())
    }, []);

    return (
        <OrderTable data={orders} />
    );
}
