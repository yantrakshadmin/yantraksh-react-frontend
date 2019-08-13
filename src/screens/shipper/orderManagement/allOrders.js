import React, {useState, useEffect} from 'react';
import OrderTable from "../../../components/orderTable";
import {getShipperAllOrderDetails} from "../../../helpers/api";
import {errorFetchingData} from "../../../helpers/notifications";
import {BeatLoader} from "react-spinners";


export default () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getShipperAllOrderDetails()
            .then(data => setOrders(data))
            .catch(() => errorFetchingData())
    }, []);


    if(!orders.length)
        return (
            <div style={{
                textAlign: 'center',
                height: '95%',
                padding: '20%'
            }}>
                <BeatLoader	 size={10} color={'#076af2'} />
                Loading Orders...
            </div>
        );

    return (
        <OrderTable data={orders} active={'all'}/>
    );
}
