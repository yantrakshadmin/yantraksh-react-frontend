import React, {Component, useState, useEffect} from 'react';
import OrderTable from "../../../components/orderTable";
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';


export default () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders([
            {
                name: 'Naeme',
                pid: 'pid',
                quantity: 'quantity',
                dimensions: 'pic',
                weight: 'weight',
                volume: 'volume',
                origin: 'origin',
                destination: 'destination',
                time: 'time',

            },


        ])
    });
    return (
        <OrderTable data={orders} />
    );
}
