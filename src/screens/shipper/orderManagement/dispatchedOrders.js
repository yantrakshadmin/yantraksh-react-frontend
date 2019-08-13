import React from 'react';
import OrderTable from "../../../components/orderTable";
import {DISPATCHED_ORDERS} from "../../../data/orderTitles";



export default () => {
    return (
        <OrderTable title={DISPATCHED_ORDERS} dispatched={true} />
    );
};
