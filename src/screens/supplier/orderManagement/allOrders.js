import React, {Component, useState, useEffect} from 'react';
import OrderTable from "../../../components/orderTable";
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';


export default () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
       setOrders([
           {
               name: 'Naeme1'
           },
           {
               name: 'name2'
           }
       ])
    });
    return (
        <OrderTable data={orders} />
    );
}
