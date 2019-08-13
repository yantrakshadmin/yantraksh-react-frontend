import React, {useState, useEffect} from 'react';
import OrderTable from "../../../components/orderTable";
import {getShipperAllOrderDetails} from "../../../helpers/api";


export default () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getShipperAllOrderDetails()
            .then(data => setOrders(data))
            .catch(() => alert('Problem loading data'))
    }, []);
    return (
        <OrderTable data={orders}/>
    );
}
